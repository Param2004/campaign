import React, { useState } from "react";
import Layout from "../../components/layout";
import { Form, Input, Button,Message } from 'semantic-ui-react';
import { instance } from '../../ethereum/factory'
import web3 from "../../ethereum/web3";
import { Link, Router } from '../../routes'

export default function CampaignNew () {

    const [minContribution, setMinContribution] = useState('');
    const [errmsg, setErrmsg] = useState('');
    const [loading, setLoading] = useState(false);

    async function OnSubmit (event){
        event.preventDefault();
        setLoading(true);
        setErrmsg('');
        try {
            const accounts = await web3.eth.getAccounts();
            await instance.methods.createCampaign(minContribution).send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch (error) {
            setErrmsg(error.message);
        }
        setLoading(false);
    }

    return (
        <Layout>
            <h3>Create a Campaign</h3>
            <Form error={!!errmsg} onSubmit={OnSubmit}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input 
                    label='wei' labelPosition="right"
                    value={minContribution}
                    onChange={event => setMinContribution(event.target.value)}
                    />
                </Form.Field>
                <Message error header="Oops!" content={errmsg} />
                <Button loading={loading} primary>Create!</Button>
            </Form>
        </Layout>
    )
}