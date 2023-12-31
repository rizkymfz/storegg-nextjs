import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import Footer from '../../components/organism/footer'
import Navbar from '../../components/organism/navbar'
import TopupForm from '../../components/organism/topup-form'
import TopupItem from '../../components/organism/topup-item'
import { getDetailVoucher, getPaymentMethod } from '../../services/player'

export default function Detail() {
    const {query, isReady} = useRouter();
    const [dataItem, setDataItem] = useState({
        name:'',
        thumbnail:'',
        category:{
            name:''
        },
    })
    const [nominals, setNominals] = useState([])
    const [payments, setPayments] = useState([])

    const getVoucherDetail = useCallback(async (id: any) => {
        const data = await getDetailVoucher(id);
        const dataPayment = await getPaymentMethod();

        setDataItem(data)
        localStorage.setItem('data-item', JSON.stringify(data))

        setNominals(data.nominals)
        setPayments(dataPayment)
    }, [])

    useEffect(() => {
        if(isReady){
            console.log('router available', query.id)
            getVoucherDetail(query.id)
        }
    }, [isReady])
  return (
    <>
    <Navbar />
    <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
            <div className="detail-header pb-50">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                    <TopupItem data={dataItem} type='mobile'/>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                    <TopupItem data={dataItem} type='desktop' />
                    <hr/>
                    <TopupForm nominals={nominals} payments={payments} />
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}
