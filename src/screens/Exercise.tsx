import { HStack, Heading, Icon, Text, VStack, Image, Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image 
            w="full"
            h={80}
            source={{ uri: 'data:image/jpeg;base64,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' }}
            alt="Nome do Exercício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml="2">
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml="2">
                  12 séries
                </Text>
              </HStack>
            </HStack>

            <Button 
              title="Marcar como realizado"
            />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}