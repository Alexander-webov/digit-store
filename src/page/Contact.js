import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {



    return (
        <div className='app-container'>
            <h3>Поддержка:</h3>
            <div>
                <form>
                    <div class="row">
                        <div class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">textsms</i>
                                    <input type="text" id="autocomplete-input" class="autocomplete" />
                                    <label for="autocomplete-input">Ваше сообщение</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='btn-basket'>
                <NavLink to="/" className='main-btn'>Перейти на главную</NavLink>
            </div>
        </div>
    );
}

export default Contact;
