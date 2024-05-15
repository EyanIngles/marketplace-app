import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import React from 'react'


const Mint = ({provider, nft, cost, setIsLoading}) => {
    const [mintAmount, setMintAmount] = useState(1)

    const mintHandler =  async(e) => {
        e.preventDefault()

        try {
            const signer = await provider.getSigner();
            const transaction = await nft.connect(signer).mint(mintAmount, { value: cost });
            await transaction.wait();
        } catch {
            window.alert('User rejected or transaction reverted')
        }
        console.log(mintAmount)
        console.log(parseFloat(cost.toString()));


    }
    return(<>
            <div className='form-container'>
            <Form onSubmit={(e) => mintHandler(e)}>
                <Form.Group>
                    <Form.Label>Mint one of our NFT's here!</Form.Label>
                    <Form.Control name='mintAmount' type="number" placeholder="How many?"/><br></br>
                    <br></br>
                    <Button variant="primary" type="submit">Mint NFT</Button>
                </Form.Group>
            </Form>
            </div>
            </>
    )
}
export default Mint;
