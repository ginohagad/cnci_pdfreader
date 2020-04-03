import React, { Component } from 'react'


class PDFReader extends Component {

    constructor(props) {
        super(props)
        this.readerRef = React.createRef()
        this.backend = new props.backend()
    }

    componentDidMount() {
        const { src } = this.props
        const element = this.readerRef.current

        this.backend.init(src, element)
    }

    render() {
        return (
            <div ref={this.readerRef} id="reader">
            
            </div>
        )
    }
}


export default PDFReader