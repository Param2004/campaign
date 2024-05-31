import React from "react";
import Layout from "../../../components/layout";
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from "../../../components/requestRow";


RequestIndex.getInitialProps = async (ctx) => {
    const campaign = Campaign(ctx.query.address);
    const requestCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(
        Array(parseInt(requestCount)).fill().map((element, index) => {
            return campaign.methods.requests(index).call();
        })
    )


    const serializedRequests = requests.map(request => ({
        description: request.description,
        value: request.value.toString(), // Convert BigInt to string
        recipient: request.recipient,
        complete: request.complete,
        approvalCount: request.approvalCount.toString(), // Convert BigInt to string
      }));
      

    return {
        address: ctx.query.address,
        requests: serializedRequests,
        requestCount: parseInt(requestCount),
        approversCount: parseInt(approversCount)
    }
  }

export default function RequestIndex ({address, requests, requestCount, approversCount}){
    const { Header, Row, HeaderCell, Body } = Table;
    function renderRow() {
        return requests.map((request, index) => {
            return (<RequestRow 
                key={index}
                id={index+1}
                request={request}
                address={address}
                approversCount={approversCount}
            />)
        })
    }
    return (
        <Layout>
            <h3>Pending Requests</h3>
            <Link route={`/campaigns/${address}/requests/new`}>
                <Button floated="right" style={{marginBottom: '10px'}} primary>Add Request</Button>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {renderRow()}
                </Body>
            </Table>
            <div>
                Found {requestCount} requests.
            </div>
        </Layout>
    )
}