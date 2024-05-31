import React from "react";
import { Table } from 'semantic-ui-react';
import web3 from "../ethereum/web3";
import { Button } from 'semantic-ui-react';
import Campaign from "../ethereum/campaign";


export default function RequestRow({id, request, address, approversCount}){
    async function OnApprove (){
        const campaign = Campaign(address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(id-1).send({
            from: accounts[0]
        })
    };

    async function OnFinalize (){
        const campaign = Campaign(address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(id-1).send({
            from: accounts[0]
        })
    };
    const { Row, Cell } = Table;
    const readyToFinalize = request.approvalCount>approversCount /2;
    return (
        <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
            <Cell>
                {id}
            </Cell>
            <Cell>
                {request.description}
            </Cell>
            <Cell>
                {web3.utils.fromWei(request.value, 'ether')}
            </Cell>
            <Cell>
                {request.recipient}
            </Cell>
            <Cell>
                {request.approvalCount}/{approversCount}
            </Cell>
            <Cell>
                {request.complete?null:(
                <Button color='green' basic onClick={OnApprove}>Approve</Button>
                )
                }
            </Cell>
            <Cell>
                {request.complete?null:(
                <Button color='red' basic onClick={OnFinalize}>Finalize</Button>
                )
                }
            </Cell>
        </Row>
    )
}