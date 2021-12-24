import React from 'react'
import {Image} from 'antd'
import Cats from '../Assets/cats.png'

export default function Thanks() {
    return(
        <div className="thanks">
                <h3 className="thanks-h3">Special thanks to my cats for always stepping on my laptop when I'm coding:</h3>
                <div className='cats'>
                    <Image src={Cats}/>
                    <p>Carrot & Potato</p>
                </div>
            </div>
    )
}