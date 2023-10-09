import React from 'react'
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './profile'

interface sideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function SideBar(props: sideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile />
            <div className="menus">
                <MenuItem href='/member' title='Overview' icon='ic-menu-overview' active={activeMenu === 'overview'} />
                <MenuItem href='/member/transactions' title='Transactions' active={activeMenu === 'transactions'} icon='ic-menu-transaction'/>
                <MenuItem href='/member' title='Messages'  icon='ic-menu-messages'/>
                <MenuItem href='/member' title='Card'  icon='ic-menu-card'/>
                <MenuItem href='/member' title='Rewards'  icon='ic-menu-reward'/>
                <MenuItem href='/member/edit-profile' title='Settings'  icon='ic-menu-setting' active={activeMenu === 'settings'} />
                <MenuItem href='/auth/sign-in' title='Log Out'  icon='ic-menu-logout'/>
            </div>
            <Footer />
        </div>
    </section>
  )
}
