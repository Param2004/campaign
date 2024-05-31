import React from "react";
import web3 from "../../ethereum/web3";
import Layout from '../../components/layout'
import Campaign from '../../ethereum/campaign'
import { Card, Grid, Button } from 'semantic-ui-react';
import ContributeForm from "../../components/contributeForm";
import { Link } from '../../routes';

CampaignShow.getInitialProps = async (ctx) => {
    const campaign = Campaign(ctx.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
        address: ctx.query.address,
        minimumContribution: parseInt(summary[0]),
        balance: parseFloat(summary[1]),
        requestsCounnt: parseInt(summary[2]),
        approversCount: parseInt(summary[3]),
        manager: summary[4]
    }
}
   
export default function CampaignShow({address, minimumContribution, balance, requestsCounnt, approversCount, manager}) {

    function renderCards() {
        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create request to withdraw money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: requestsCounnt,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Request must be approved by the approvers.',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of [eople who have already donated to this campaign',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: parseFloat(web3.utils.fromWei(balance, 'ether')),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.',
                style: {overflowWrap: 'break-word'}
            },
        ]
        return <Card.Group items={items} />;
    }

    return (
        <Layout>
            <h3>Campaign Details</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                    {renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={address}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Link route={`/campaigns/${address}/requests`}>
                        <Button primary>View Requests</Button>
                    </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    )
}