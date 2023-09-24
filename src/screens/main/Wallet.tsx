import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItem,
} from "react-native";
import { useState } from "react";
import { transactions } from "../../../constants/data";
import { TransactionsType } from "../../types/types";
import { TransactionCard, TransactionHeader } from "../../components";
import { GAP, PADDING } from "../../../constants";

const Wallet = () => {
  const [data, setData] = useState<TransactionsType[] | null>(transactions);

  const renderItem: ListRenderItem<TransactionsType> = ({ item }) => {
    return <TransactionCard item={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: TransactionsType) => item.id}
        contentContainerStyle={{ gap: GAP.large, padding: PADDING.normal }}
        ListHeaderComponent={TransactionHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({});