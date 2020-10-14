import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileContext } from './FileContext'

export default function Dropzone() {
  const [, setFile] = useContext(FileContext)
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((incoming) => {
      setFile(incoming)
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
    </div>
  )
}
