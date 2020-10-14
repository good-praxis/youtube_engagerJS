import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileContext } from './FileContext'

export default function Dropzone() {
  const [file, setFile] = useContext(FileContext)
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((incoming) => {
      setFile(incoming)
    })
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  console.log(file)

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}
