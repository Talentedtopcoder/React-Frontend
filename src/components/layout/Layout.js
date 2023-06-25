import './layout.scss'
import React, {useState} from 'react'
import {ReactComponent as Flower1} from '../../assets/images/flower1.svg'
import {ReactComponent as Flower2} from '../../assets/images/flower2.svg'
import {ReactComponent as SignupDoor} from '../../assets/images/door.svg'
import {ReactComponent as IshqDoor} from '../../assets/images/ishq.svg'
import {ReactComponent as NamasteDoor} from '../../assets/images/namaste.svg'
import {ReactComponent as CupShupDoor} from '../../assets/images/cupshup.svg'
import {ReactComponent as KhattaDoor} from '../../assets/images/khatta.svg'
import Navmenu from '../navmenu/Navmenu'


const Layout = ({pageName, form, buttons}) => {
    
    const [isAuth, setAuth] = useState(false);
    
    let door;
    switch (pageName) {
        case 'signup':
            door = <SignupDoor className='door'/>
            break;
        case 'otp':
            door = ""
            break;
        case 'namaste':
            door = <NamasteDoor className='door'/>
            break;
        case 'ishq':
            door = <IshqDoor className='door'/>
            break;
        case 'cupshup':
            door = <CupShupDoor className='door'/>
            break;
        case 'khatta':
            door = <KhattaDoor className='door'/>
            break;
                                
    }
    return (
        <div className='wrapper'>
            <div className='header'>
                <Flower1 className='flower'/>
                {
                    isAuth ? <Navmenu /> : <Flower2 className='flower'/>
                }
            </div>
            <div className='center'>
                <div>
                    {door}
                </div>
                <div className='form'>
                    {form}
                </div>
                <div className='button-group'>
                    {buttons}
                </div>
            </div>
            <div className='footer'>
            </div>
        </div>
    )
}

export default Layout