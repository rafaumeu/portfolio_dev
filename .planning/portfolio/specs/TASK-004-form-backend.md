# TASK-004: Conectar formulário de contato com Web3Forms

**Status:** `[x] Ready`

## O QUE E
Fazer o formulário de contato realmente enviar emails via Web3Forms (serviço gratuito, sem backend).

## EXECUTION MODE
- [ ] **YOLO**
- [x] **Interactive**
- [ ] **Pre-flight**

## PRE-CONDITIONS
- [x] Contact.tsx lido — form sem action, só `e.preventDefault()`
- [x] É preciso criar uma conta Web3Forms ou usar access_key existente

## DEPENDENCIAS
- Nenhuma (independente)

## O QUE MODIFICAR

### 1. `src/components/Contact.tsx` — Adicionar Web3Forms

**Mudanças necessárias:**
1. Criar um arquivo `.env.local` com a access_key do Web3Forms (NEXT_PUBLIC_WEB3FORMS_KEY)
2. No handleSubmit:
   - Enviar POST para `https://api.web3forms.com/submit`
   - Usar `fetch` com `access_key`, `name`, `email`, `message` no body
   - Mostrar loading state enquanto envia
   - Mostrar success/error state baseado na resposta
3. Adicionar `isSubmitting` e `error` state além do `submitted`

### Código do handleSubmit (atualizado):

```tsx
const [isSubmitting, setIsSubmitting] = useState(false);
const [error, setError] = useState('');

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
    } else {
      setError(data.message || 'Erro ao enviar mensagem');
    }
  } catch {
    setError('Erro de conexão. Tente novamente.');
  } finally {
    setIsSubmitting(false);
  }
}
```

**Render condicional:**
```tsx
{error && (
  <div className="contact-error" role="alert">
    <p>{error}</p>
  </div>
)}
{isSubmitting ? (
  <button type="submit" className="contact-submit" disabled>
    Enviando...
  </button>
) : (...)}
```

### 2. Criar `.env.local` com:
```
NEXT_PUBLIC_WEB3FORMS_KEY=sua_access_key_aqui
```

**Importante:** O Rafael precisa criar a conta no Web3Forms (web3forms.com) pra pegar a access_key. Enquanto não tiver, deixar o fetch preparado mas com fallback.

### 3. Atualizar i18n — adicionar error key
Em pt-BR.json:
```json
"contact": {
  ...
  "errorMessage": "Erro ao enviar. Tente novamente."
}
```

Em en-US.json:
```json
"contact": {
  ...
  "errorMessage": "Error sending. Please try again."
}
```

## TESTES DERIVADOS
N/A — sem testes no projeto

## CONTRATO DE SAIDA
N/A

## ARMADILHAS
- `NEXT_PUBLIC_` prefixo é obrigatório pra Next.js expor no client-side
- Web3Forms key é pública por design (API key, não secret)
- CORS é configurado pelo Web3Forms dashboard (domain whitelist)
- O form precisa ter `name` attribute nos inputs pra `FormData` funcionar

## CRITERIO DE ACEITE
- [ ] Formulário faz POST para web3forms no submit
- [ ] Loading state aparece enquanto envia
- [ ] Success state aparece após envio bem-sucedido
- [ ] Error state aparece se falhar
- [ ] `next build` passa sem erro

## POST-CONDITIONS
- [ ] `next build` sem erros

## ESTIMATIVA
LOC: ~80 | Tempo: ~15 min