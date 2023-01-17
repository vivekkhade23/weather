import React from 'react'
import { useSelector } from 'react-redux'
import {
    Table,
    Thead,
    Tbody,

    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Result = () => {
    const incorrectcount=useSelector((store)=>store.incorrectcount)
    const correctcount=useSelector((store)=>store.correctcount)
    const score=useSelector((store)=>store.score)

    let percent=(correctcount/(incorrectcount+correctcount))*100;
percent =percent.toFixed(2)

  return (
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>performance</TableCaption>
    <Thead>
      <Tr>
        <Th>Corrent answer</Th>
        <Th>Inorrent answer</Th>
        <Th > Score</Th>
        <Th > percentge</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
        <Td>{correctcount}</Td>
        <Td>{incorrectcount}</Td>
        <Td >{score}</Td>
        <Td >{percent}</Td>

      </Tr>
    </Tbody>
  
  </Table>
</TableContainer>
  )
}

export default Result