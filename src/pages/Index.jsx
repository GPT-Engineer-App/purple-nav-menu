import React from "react";
import { Box, VStack, HStack, Text, Avatar, Icon, Flex, Spacer, Heading, useMediaQuery, IconButton, Collapse, useDisclosure } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaLightbulb, FaCog, FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { label: "Home", icon: FaHome },
  { label: "Activity", icon: FaChartBar },
  { label: "Insights", icon: FaLightbulb },
  { label: "Settings", icon: FaCog },
];

const Index = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex h="100vh">
      {isMobile ? (
        <>
          <IconButton icon={<Icon as={isOpen ? FaTimes : FaBars} />} onClick={onToggle} variant="ghost" size="lg" m={4} />
          <Collapse in={isOpen} animateOpacity>
            <VStack w="200px" h="100%" bg="purple.100" p={4} spacing={4} alignItems="stretch">
              {menuItems.map((item, index) => (
                <Box key={index} p={4} borderRadius="md" cursor="pointer" bg={selectedItem === index ? "purple.500" : "purple.200"} color={selectedItem === index ? "white" : "black"} onClick={() => setSelectedItem(index)}>
                  <Icon as={item.icon} mr={2} />
                  <Text fontSize="14px">{item.label}</Text>
                </Box>
              ))}
            </VStack>
          </Collapse>
        </>
      ) : (
        <VStack w="200px" h="100%" bg="purple.100" p={4} spacing={4} alignItems="stretch">
          {menuItems.map((item, index) => (
            <Box key={index} p={4} borderRadius="md" cursor="pointer" bg={selectedItem === index ? "purple.500" : "purple.200"} color={selectedItem === index ? "white" : "black"} onClick={() => setSelectedItem(index)}>
              <Icon as={item.icon} mr={2} />
              <Text fontSize="14px">{item.label}</Text>
            </Box>
          ))}
        </VStack>
      )}

      <VStack flex={1} p={8} spacing={8} alignItems="stretch">
        <HStack bg="white" p={4} borderRadius="md" boxShadow="md">
          <Heading size="md">Side Navigation</Heading>
          <Text fontSize="sm" color="gray.500">
            v1.0
          </Text>
          <Spacer />
          <VStack alignItems="flex-end" spacing={1}>
            <HStack>
              <Avatar size="sm" name="Harry Adams" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjUzNTkwOXww&ixlib=rb-4.0.3&q=80&w=1080" />
              <VStack spacing={0} alignItems="flex-start">
                <Text fontSize="16px" fontWeight="bold">
                  Harry Adams
                </Text>
                <Text fontSize="12px" color="gray.500">
                  Travel Consultant
                </Text>
              </VStack>
            </HStack>
            <HStack spacing={8}>
              <VStack alignItems="flex-start">
                <Text fontSize="14px" fontWeight="bold">
                  New Listings
                </Text>
                <Text fontSize="14px">3</Text>
              </VStack>
              <VStack alignItems="flex-start">
                <Text fontSize="14px" fontWeight="bold">
                  Open Houses
                </Text>
                <Text fontSize="14px">1</Text>
              </VStack>
              <VStack alignItems="flex-start">
                <Text fontSize="14px" fontWeight="bold">
                  Price Changes
                </Text>
                <Text fontSize="14px">10</Text>
              </VStack>
              <VStack alignItems="flex-start">
                <Text fontSize="14px" fontWeight="bold">
                  Closed Sales
                </Text>
                <Text fontSize="14px">18</Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>

        <Box flex={1} bg="pink.100" borderRadius="md" boxShadow="md" />
      </VStack>
    </Flex>
  );
};

export default Index;
