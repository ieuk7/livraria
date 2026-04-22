import { NextResponse } from 'next/server';

const API_TOKEN = 'sk_a689a20c480aee9372486cfc6ed7c349ecd7951ce3129f0236adff9a31ee42c7';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const hash = searchParams.get('hash');

    if (!hash) {
        return NextResponse.json({ error: 'Hash da transação é obrigatório.' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://multi.paradisepags.com/api/v1/check_status.php?hash=${hash}`, {
            headers: {
                'X-API-Key': API_TOKEN
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Erro ao verificar status.'}));
            return NextResponse.json({ error: errorData.message || 'Erro no servidor da API' }, { status: response.status });
        }

        const data = await response.json();
        
        return NextResponse.json(data);

    } catch (error) {
        console.error('Status Check Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro interno.';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
