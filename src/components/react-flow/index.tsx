import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import ReactFlow, { Node, Background, BackgroundVariant, Handle, MiniMap, Position, useStoreApi, useStore, getOutgoers, getConnectedEdges } from 'reactflow';
import 'reactflow/dist/style.css';

type Detail = {
    name: string
    position: string
    branch: string
    contactNoPrimary: string
    contactNoSecondary: string
    email: string
    dr: string
    sub: string
    avatar: string
}

const defaultNodes: Node<Detail>[] = [
    {
        id: 'a',
        data: {
            name: "Romi Khadka",
            position: "CEO",
            branch: "Kathmandu",
            contactNoPrimary: "01-4141123",
            contactNoSecondary: "01-4141124",
            email: "rkhadka@gmail.com",
            dr: "2",
            sub: "5",
            avatar: "https://i.pravatar.cc/150?img=39",
        },
        position: { x: 250, y: 25 },
        type: "customNode"
    },

    {
        id: 'b',
        data: {
            name: "Keshav Sundas",
            position: "COO",
            branch: "Kathmandu",
            contactNoPrimary: "9812312312",
            contactNoSecondary: "9812312314",
            email: "ksundas@gmail.com",
            dr: "2",
            sub: "6",
            avatar: "https://i.pravatar.cc/150?img=11",
        },
        position: { x: 100, y: 125 },
        type: "customNode"
    },

    {
        id: 'c',
        data: {
            name: "Pujan Shakya",
            position: "POO",
            branch: "Kathmandu",
            contactNoPrimary: "9812312312",
            contactNoSecondary: "9812312314",
            email: "ksundas@gmail.com",
            dr: "2",
            sub: "6",
            avatar: "https://i.pravatar.cc/150?img=11",
        },
        position: { x: 100, y: 125 },
        type: "customNode",
        hidden: true,
    },

];

const defaultEdges = [
    { id: 'ea-b', source: 'a', target: 'b', type: "step" },
    { id: 'ea-c', source: 'a', target: 'c', type: "step" },
];


const connectionLineStyle = { stroke: 'white' };


export const CustomNode = (props: any) => {
    const { data, id } = props
    const store = useStoreApi();

    return <Box fontSize="sm" >
        <Handle type="target" position={Position.Top} isConnectable={true} />
        <Box>
            <Flex p={3} alignItems="center" bg="white" gap={2}>
                <Avatar rounded="none" src="" />
                <Box>
                    <Text color="blue.500" fontWeight="medium">{data.name}</Text>
                    <Text fontWeight="medium">{data.position}</Text>
                    <Text color="gray.500">{data.branch}</Text>
                </Box>
            </Flex>
            <Box p={3} bg="gray.50">
                <Box >
                    <Text>{data.email}</Text>
                    <Text>{data.contactNoPrimary}, {data.contactNoSecondary}</Text>
                </Box>
                <Box><Text display="inline" fontWeight="medium">{data.dr}</Text>DR | <Text display="inline" fontWeight="medium">{data.sub}</Text>SUB</Box>

                <Button onClick={() => {

                    const state = store.getState()
                    const nodes = state.getNodes()
                    const edges = state.edges

                    const outgoers = getOutgoers(
                        { id } as Node,
                        nodes,
                        edges,
                    );

                    const connectedEdges = getConnectedEdges(nodes, edges).filter(edge => edge.source === id);

                    console.log({connectedEdges})


                    const newEdges = edges.map(edge => {
                        const found = connectedEdges.find(connectedEdge => {
                            return connectedEdge.id === edge.id
                        })
                        if (found) {
                            return {
                                ...edge, hidden: true
                            }
                        }
                        return {
                            ...edge, hidden: false
                        }
                    })
                    const newNodes = nodes.map(node => {
                        const found = outgoers.find(outgoingNode => {
                            return outgoingNode.id === node.id
                        })
                        if (found) {
                            return {
                                ...node, hidden: true
                            }
                        }
                        return {
                            ...node, hidden: false
                        }
                    })
                    
                    store.getState().setNodes(newNodes)
                    store.getState().setEdges(newEdges)
                }} size="xs" bg="teal.600" color="gray.50" _hover={{
                    bg: "teal.500"
                }}>Collapse</Button>
            </Box>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </Box>

        <Handle type="source" position={Position.Bottom} isConnectable={true} />
    </Box>
}


const nodeTypes = { customNode: CustomNode };
export const Rf = () => {

    return (
        <Box height="500px" w="full">

            <ReactFlow
                defaultNodes={defaultNodes}
                defaultEdges={defaultEdges}
                fitView
                minZoom={0.5}
                maxZoom={0.9}
                nodeTypes={nodeTypes}
                style={{
                    backgroundColor: 'black',
                }}
                connectionLineStyle={connectionLineStyle}>
                <MiniMap />
                <Background
                    variant={BackgroundVariant.Dots}
                    gap={12}
                    size={1}
                />
            </ReactFlow>

        </Box>
    );
}
