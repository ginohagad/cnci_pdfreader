import React, { Component } from 'react'
import PDFReader from './PDFReader/PDFReader'
import PDFJS from '../backend/pdfjs'



class Books extends Component {
    render() {
        return (
            <PDFReader backend={PDFJS} src="/worksheet.pdf" />
        )
    }
}


export default Books