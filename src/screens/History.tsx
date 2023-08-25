import { HistoryCard } from "@components/HistoyCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { VStack } from "native-base";

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios"/>

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  )
}