import jwtDecode from 'jwt-decode'
import React from 'react'
import OverviewContent from '../../components/organism/OverviewContent'
import SideBar from '../../components/organism/SideBar'
import { JWTPayloadTypes, UserTypes } from '../../services/data-types'

export default function Member() {
  return (
    <section className="overview overflow-auto">
        <SideBar activeMenu='overview'/>
        <OverviewContent />
    </section>
  )
}


interface getServerSideProps {
  req: {
      cookies:{
          token:string;
      }
  }
}

export async function getServerSideProps({ req }: getServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
      return {
          redirect: {
              destination: '/auth/sign-in',
              permanent: false
          },
      };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii'); // ugly to beauty
  const payload: JWTPayloadTypes = jwtDecode(jwtToken)
  console.log('payload', payload)
  const userFromPayload: UserTypes = payload.player
  const IMG = process.env.NEXT_PUBLIC_IMG
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`

  return {
      props: {
          user: userFromPayload,
      }
  }

}