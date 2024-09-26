import {useState,} from 'react';
import { Menu , X } from 'lucide-react';

const HamBurger = () => {
  const [isOpen, SetIsOpen] =  useState(false)
  const handleChange = () => {
    SetIsOpen(!isOpen)
  }

  return (
    <button onClick={handleChange}>
        {isOpen ?  <X /> : <Menu />  }
    </button>
  )
}

export default HamBurger