import React from 'react'
import SideBar from '../../../components/organism/SideBar'
import TransactionContent from '../../../components/organism/transactionContent'

export default function Transactions() {
  return (
    <>
    <SideBar activeMenu='transactions' />

    <section className="transactions overflow-auto">
        <TransactionContent />
    </section>
    </>
  )
}
