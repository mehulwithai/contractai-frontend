'use client'
import { useState, useRef } from 'react'

export default function UploadZone({ onUpload, loading }) {
  const [dragOver, setDragOver] = useState(false)
  const [fileError, setFileError] = useState('')
  const inputRef = useRef()

  const validate = (file) => {
    if (!file) return 'No file selected.'
    const name = file.name.toLowerCase()
    if (!name.endsWith('.pdf') && !name.endsWith('.docx'))
      return 'Please upload a PDF or Word (.docx) file.'
    if (file.size > 10 * 1024 * 1024)
      return 'File too large. Maximum size is 10MB.'
    return null
  }

  const handleFile = (file) => {
    const err = validate(file)
    if (err) { setFileError(err); return }
    setFileError('')
    onUpload(file)
  }

  const onDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    handleFile(e.dataTransfer.files[0])
  }

  return (
    <div>
      <div
        onClick={() => !loading && inputRef.current.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        style={{
          border: `2px dashed ${dragOver ? 'var(--accent)' : 'var(--border)'}`,
          borderRadius: '12px',
          padding: '48px 24px',
          textAlign: 'center',
          cursor: loading ? 'not-allowed' : 'pointer',
          background: dragOver ? 'var(--accent-light)' : 'var(--bg-secondary)',
          transition: 'all 0.15s',
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? (
          <div>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>⏳</div>
            <LoadingMessages />
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📄</div>
            <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '6px', color: 'var(--text-primary)' }}>
              Drop your contract here
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
              or click to browse — PDF or Word doc
            </div>
            <div style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
            }}>
              Choose file
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '12px' }}>
              Max 10MB · PDF or .docx
            </div>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.docx"
        style={{ display: 'none' }}
        onChange={e => handleFile(e.target.files[0])}
      />

      {fileError && (
        <div className="error-msg" style={{ marginTop: '12px' }}>{fileError}</div>
      )}
    </div>
  )
}

function LoadingMessages() {
  const [idx, setIdx] = useState(0)
  const msgs = [
    'Reading your contract…',
    'Identifying risky clauses…',
    'Checking for red flags…',
    'Preparing your review…',
  ]

  useState(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % msgs.length), 2000)
    return () => clearInterval(t)
  })

  return (
    <div>
      <div style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
        {msgs[idx]}
      </div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
        This takes 5–15 seconds
      </div>
    </div>
  )
}
