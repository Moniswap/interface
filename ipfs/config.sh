#!/bin/sh
set -ex

ipfs config --json Addresses.Swarm '["/ip4/0.0.0.0/tcp/4001", "/ip4/0.0.0.0/tcp/8081/ws", "/ip6/::/tcp/4001"]'
ipfs config --bool Swarm.RelayService.Enabled true
ipfs config AutoNAT.ServiceMode 'enabled'
ipfs config --bool Swarm.RelayClient.Enabled true
ipfs config --json Peering.Peers '[{"ID": "QmcFf2FH3CEgTNHeMRGhN7HNHU1EXAxoEk6EFuSyXCsvRE", "Addrs": ["/dnsaddr/node-1.ingress.cloudflare-ipfs.com"]}, {"ID": "QmcFmLd5ySfk2WZuJ1mfSWLDjdmHZq7rSAua4GoeSQfs1z", "Addrs": ["/dnsaddr/node-2.ingress.cloudflare-ipfs.com"]}, {"ID": "QmWaik1eJcGHq1ybTWe7sezRfqKNcDRNkeBaLnGwQJz1Cj", "Addrs": ["/dnsaddr/fra1-1.hostnodes.pinata.cloud"]}, {"ID": "12D3KooWQ85aSCFwFkByr5e3pUCQeuheVhobVxGSSs1DrRQHGv1t", "Addrs": ["/dnsaddr/node-1.ipfs.4everland.net"]}, {"ID": "12D3KooWGaHbxpDWn4JVYud899Wcpa4iHPa3AMYydfxQDb3MhDME", "Addrs": ["/dnsaddr/ipfs.ssi.eecc.de"]}, {"ID": "12D3KooWCVXs8P7iq6ao4XhfAmKWrEeuKFWCJgqe9jGDMTqHYBjw", "Addrs": ["/ip4/139.178.68.217/tcp/6744/p2p/12D3KooWCVXs8P7iq6ao4XhfAmKWrEeuKFWCJgqe9jGDMTqHYBjw"]}, {"ID": "Qmcfuo1TM9uUiJp6dTbm915Rf1aTqm3a3dnmCdDQLHgvL5", "Addrs": ["/dnsaddr/node-11.ingress.cloudflare-ipfs.com"]}]'
ipfs config Addresses.API '/ip4/0.0.0.0/tcp/5001'
ipfs config Addresses.Gateway '/ip4/0.0.0.0/tcp/8080'
ipfs config --json API.HTTPHeaders '{"Access-Control-Allow-Origin": ["*"], "Access-Control-Allow-Methods": ["PUT", "POST"]}'
ipfs config --json Gateway.HTTPHeaders '{"Access-Control-Allow-Origin": ["*"], "Access-Control-Allow-Methods": ["GET"], "Access-Control-Allow-Headers": ["X-Requested-With", "Range", "User-Agent"]}'
