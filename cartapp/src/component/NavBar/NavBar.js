import React from 'react';
import { useGlobalContext } from '../../Hooks/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const { amount } = useGlobalContext();
    return (
        <div className='nav-center'>
            <h3>Cart App</h3>
          

            
            
            <div className='nav-container'>
                <button>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>

        
    );
}

export default NavBar;
