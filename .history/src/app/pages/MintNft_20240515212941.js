import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Mint = () => {
    //use Selectors from redux state
    const nft = useSelector(state => state.nft.nContract)
    const provider = useSelector(state => state.provider.connection)
    //useStates
    const [mintAmount, setMintAmount] = useState(1)

    const cost = cost;

    const mintHandler =  async(e) => {
        e.preventDefault()

            const signer = await provider.getSigner();
            const transaction = await nft.connect(signer).mint(mintAmount, { value: cost });
            await transaction.wait();
        console.log(mintAmount)
        console.log(parseFloat(cost.toString()));


    }
    return(
        <>
        <Form onSubmit={mintHandler} style={{maxWidth: '450px', margin: '50px auto'}}>
            <Form.Group>
                <Form.Label>Choose how many you want mint:</Form.Label>
                <Form.Control type='number' value={mintAmount} onChange={(e) => setMintAmount(parseInt(e.target.value))} />
            </Form.Group>
            <Form.Group>
                <Button variant='primary' type='submit' style={{ width: '100%'}}>MINT</Button>
            </Form.Group>
        </Form>
        </>
    )
}
export default Mint;
