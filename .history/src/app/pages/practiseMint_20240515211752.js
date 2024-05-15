import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

const Mint = ({provider, nft, cost, setIsLoading}) => {
    const [isWaiting, setIsWaiting] = useState(false)
    const [mintAmount, setMintAmount] = useState(1)

    const mintHandler =  async(e) => {
        e.preventDefault()
        setIsWaiting(true)

        try {
            const signer = await provider.getSigner();
            const transaction = await nft.connect(signer).mint(mintAmount, { value: cost });
            await transaction.wait();
        } catch {
            window.alert('User rejected or transaction reverted')
        }
        console.log(mintAmount)
        console.log(parseFloat(cost.toString()));

        setIsLoading(true)

    }
    return(
        <Form onSubmit={mintHandler} style={{maxWidth: '450px', margin: '50px auto'}}>
            <Form.Group>
                <Form.Label>Choose how many you want mint:</Form.Label>
                <Form.Control type='number' value={mintAmount} onChange={(e) => setMintAmount(parseInt(e.target.value))} />
            </Form.Group>
            <Form.Group>
            {isWaiting? (
                <Spinner animation="border" style={{ display: 'block' , margin: '0 auto'}}></Spinner>

            ) : (
                <Button variant='primary' type='submit' style={{ width: '100%'}}>MINT</Button>
            )}
            </Form.Group>
        </Form>
    )
}
export default Mint;
