import React from 'react';
import './Controls.css';
import Form from 'react-bootstrap/Form';
import { configControls } from './config';

export function ControlsComponent() {
    return (
        <div class="controlsContainer">
            <Form>
                <div className="controlsContainer__range">
                    <Form.Label>Tamanho da Senha</Form.Label> <br/>
                    <Form.Range
                        value={0} 
                        min={configControls.minValueRange} 
                        max={configControls.maxValueRange}/>
                </div>
                <Form.Check 
                    type="switch"
                    id="letter-radio"
                    label="Incluir letras"
                />
                <Form.Check 
                    type="switch"
                    id="number-radio"
                    label="Incluir números"
                />
                <Form.Check 
                    type="switch"
                    id="chars-radio"
                    label="Incluir caracteres especiais"
                />
            </Form>
        </div>
    )

}