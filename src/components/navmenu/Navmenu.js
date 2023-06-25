import './navmenu.scss'
import React from 'react'
import {ReactComponent as Alert} from '../../assets/images/alert.svg'
import {ReactComponent as AlertBottom} from '../../assets/images/alert_bottom.svg'
import {ReactComponent as AlertCircle} from '../../assets/images/alert_redcircle.svg'
import {ReactComponent as Avatar} from '../../assets/images/avatar.svg'

const Navmenu = () => {
    return (
        <div className='navMenu'>
            <div className='alert'>
                <Alert />
                <AlertBottom />
                <AlertCircle className='alert-circle'/>
            </div>
            <div className='avatar'>
                <Avatar />
            </div>
        </div>
    )
}

export default Navmenu