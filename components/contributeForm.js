import React, { useState } from "react";
import web3 from "../ethereum/web3";
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from "../ethereum/campaign";
import { Router } from '../routes'

export default function ContributeForm ({address}){

    const [value, setValue] = useState('');
    const [errmsg, setErrmsg] = useState('');
    const [loading, setLoading] = useState(false);

    async function Submit (event) {
        event.preventDefault();
        const campaign = Campaign(address);
        setLoading(true);
        setErrmsg('');
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether')
            })
            Router.replaceRoute(`/campaigns/${address}`)
        } catch (error) {
            setErrmsg(error.message);
        }
        setLoading(false);
        setValue('');
    } 

    return (
        <Form onSubmit={Submit} error={!!errmsg}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                label="ether"
                labelPosition="right"
                />
                <Message error header='Oh no!' content={errmsg} />
                <Button loading={loading} primary style={{marginTop: '10px'}}>
                    Contribute!
                </Button>
            </Form.Field>
        </Form>
    )
}