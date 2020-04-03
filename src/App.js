import React, { Component } from 'react'
import PDFReader from './components/PDFReader/PDFReader'
import PDFJS from './backend/pdfjs'
import Navbar from './components/Navbar'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <PDFReader backend={PDFJS} src='/myPDF.pdf' />
            </div>
        )
    }
}


export default App