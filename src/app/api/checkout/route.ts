import { NextResponse } from 'next/server';

// These should be in environment variables in a real app
const API_TOKEN = 'sk_a689a20c480aee9372486cfc6ed7c349ecd7951ce3129f0236adff9a31ee42c7';
const PRODUCT_HASH = 'prod_4d047653791aabc8';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { total, email } = body;

    if (total === undefined || !email) {
      return NextResponse.json({ error: 'Valor total e e-mail são obrigatórios.' }, { status: 400 });
    }

    const reference = 'CKO-' + new Date().getTime() + '-' + Math.floor(Math.random() * 100000);
    const name = email.split('@')[0].replace(/[\._-]/g, ' ').replace(/\d+/g, '').trim();

    const payload = {
      amount: Math.round(total * 100), // API expects cents
      description: 'Cartas para Helena',
      reference: reference,
      checkoutUrl: request.headers.get('referer') || '',
      productHash: PRODUCT_HASH,
      orderbump: [], // Addons are already included in the total price
      customer: {
        name: name || 'Cliente',
        email: email,
        document: '', 
        phone: '' 
      },
      address: { // Digital product, so dummy address
          "street": "Rua do Produto Digital",
          "number": "0",
          "neighborhood": "Internet",
          "city": "Brasil",
          "state": "BR",
          "zipcode": "00000000",
          "complement": "N/A"
      }
    };
    
    const api_url = 'https://multi.paradisepags.com/api/v1/transaction.php';
    
    const apiResponse = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-API-Key': API_TOKEN
      },
      body: JSON.stringify(payload)
    });

    if (!apiResponse.ok) {
        const errorData = await apiResponse.json().catch(() => ({ message: 'Erro desconhecido na API de pagamento.'}));
        console.error('API Error:', errorData);
        const errorMessage = errorData?.message || errorData?.error || `Erro da API: ${apiResponse.statusText}`;
        return NextResponse.json({ error: errorMessage }, { status: apiResponse.status });
    }
    
    const responseData = await apiResponse.json();
    const transactionData = responseData.transaction || responseData;

    const frontendResponse = {
        hash: transactionData.id || reference,
        pix: {
            pix_qr_code: transactionData.qr_code || '',
            expiration_date: transactionData.expires_at || null
        },
        amount_paid: total
    };

    return NextResponse.json(frontendResponse);

  } catch (error) {
    console.error('Checkout Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro interno.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
