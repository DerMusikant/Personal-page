import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'

export default function Layout(props){
    return (
    <>
    <Header />
    {props.children}
    <BackToTop />
    <Footer />
    </>
    )
}
