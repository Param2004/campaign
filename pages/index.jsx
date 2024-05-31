import React from "react";
import {instance} from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/layout'
import { Link } from '../routes'

let campaigns;
export async function getServerSideProps() {
  campaigns = await instance.methods.getDeployedCampaigns().call();
  return { props: { campaigns } };
}


export default function Home ({ campaigns }) {

  const renderCampaigns = () => {
    const items = campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            view campaign
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />
  }

  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link route="/campaigns/new">
          <Button
          style={{width: '100%'}}
          floated="right"
          content="Create Campaign"
          icon="add circle"
          primary
          />
        </Link>
        { renderCampaigns() }
      </div>
    </Layout>
  )
};