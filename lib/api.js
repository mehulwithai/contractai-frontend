import { supabase } from './supabase'

const API = process.env.NEXT_PUBLIC_API_URL

export async function apiCall(path, options = {}) {
  const { data: { session } } = await supabase.auth.getSession()
  const token = session?.access_token

  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    }
  })

  if (res.status === 402) {
    window.location.href = '/upgrade'
    return null
  }

  if (!res.ok) throw new Error(await res.text())
  return res.json()
}

export async function uploadContract(file) {
  const { data: { session } } = await supabase.auth.getSession()
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch(`${API}/api/reviews/`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${session.access_token}` },
    body: formData
  })

  if (res.status === 402) { window.location.href = '/upgrade'; return null }
  if (!res.ok) throw new Error('Upload failed')
  return res.json()
}