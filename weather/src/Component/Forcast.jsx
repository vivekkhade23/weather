import { Box, Icon, Text } from "@chakra-ui/react";
import { ForcastBox } from "./Component";
import { ImSun } from "react-icons/im";
import { MdOutlineNightsStay } from "react-icons/md";
import { dateFormat } from "../api/exFunction";
import { setItem } from "../api/session";
import { ForcastModal } from "./ForcastModal";

export const Forcast = ({ data }) => {

    const { date, day } = dateFormat(data.dt);

    return (
        <Box>
            <ForcastBox >

                <Box p={'5px'} bg={'red'}>
                    <Text fontWeight={500} color={'white'} fontSize={'18px'}>{date}</Text>
                    <Text fontWeight={500} color={'white'} fontSize={'18px'}>{day}</Text>
                </Box>

                <ForcastModal data={data} />

            </ForcastBox>
        </Box>
    );
};
