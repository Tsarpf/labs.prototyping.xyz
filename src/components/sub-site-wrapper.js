import React from 'react'
import IframeResizer from 'react-iframe-resizer-super'

const WrapperComponent = (props) => {
    const iframeResizerOptions = { checkOrigin: false }
    return <IframeResizer src={props.address} iframeResizerOptions={iframeResizerOptions}> </IframeResizer>
}

export default WrapperComponent