import React, { useState } from "react";
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Layout from "../../../components/layout";
import Campaign from '../../../ethereum/campaign';
import web3 from "../../../ethereum/web3";
import {Link, Router } from '../../../routes';

RequestForm.getInitialProps = async (ctx) => {
    return {
        address: ctx.query.address
    }
}

export default function RequestForm({address}){

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [recipiente, setRecipient] = useState('');
    const [loader, setLoader] = useState(false);
    const [errmsg, setErrmsg] = useState('');

    async function Submit (e) {
        e.preventDefault();

        const campaign = Campaign(address);
        setLoader(true);
        setErrmsg('');
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipiente)
                .send({ from: accounts[0] });
            Router.pushRoute(`/campaigns/${address}/requests`)
        } catch (error) {
            setErrmsg(error.message);
        }
        setLoader(false);
    }

    return (
        <Layout>
        <Link route={`/campaigns/${address}/requests`}>
            Back
        </Link>
            <h3>Create a Request</h3>
            <Form onSubmit={Submit} error={!!errmsg}>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Value in Ether</label>
                    <Input 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input 
                        value={recipiente}
                        onChange={e => setRecipient(e.target.value)}
                    />
                </Form.Field>
                <Message error header='oops!' content={errmsg} />
                <Button loading={loader} primary>Create!</Button>
            </Form>
        </Layout>
    )
}