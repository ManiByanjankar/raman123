import { useBottomPadding } from '@/hooks/useBottomNavigationPadding';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const ReceiptHistory = () => {
  const bottomPadding = useBottomPadding();
  const receipts = [
    {
      amount: 80000,
      date: '21 July, 2024',
      projectName: 'Project Name demo',
      category: 'Category Name',
      status: 'Reimbursed',
      hasVAT: true,
    },
    {
      amount: 2100,
      projectName: 'Project Name demo',
      category: 'Category Name',
      status: 'Pending',
      hasVAT: false,
    },
    {
      amount: 2100,
      date: '21 July, 2024',
      projectName: 'Project Name demo',
      category: 'Category Name',
      status: 'Rejected',
      hasVAT: false,
    },
    {
      amount: 2100,
      date: '21 July, 2024',
      projectName: 'Project Name demo',
      category: 'Category Name',
      status: 'Approved',
      hasVAT: true,
    },
    {
      amount: 2100,
      date: '21 July, 2024',
      projectName: 'Project Name demo',
      category: 'Category Name',
      status: 'Reimbursed',
      hasVAT: true,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Reimbursed':
        return '#007AFF';
      case 'Pending':
        return '#FF9500';
      case 'Rejected':
        return '#FF3B30';
      case 'Approved':
        return '#34C759';
      default:
        return '#8E8E93';
    }
  };

  const getStatusBackground = (status) => {
    switch (status) {
      case 'Reimbursed':
        return '#EBF5FF';
      case 'Pending':
        return '#FFF4E5';
      case 'Rejected':
        return '#FFE5E5';
      case 'Approved':
        return '#E5FFF0';
      default:
        return '#F2F2F7';
    }
  };

  const ReceiptCard = ({ receipt }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.amount}>Rs. {receipt.amount.toLocaleString()}</Text>
        <View style={styles.badges}>
          {receipt.hasVAT && (
            <View style={styles.vatBadge}>
              <Text style={styles.vatText}>VAT</Text>
            </View>
          )}
          <View
            style={[
              styles.statusBadge,
              { backgroundColor: getStatusBackground(receipt.status) },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                { color: getStatusColor(receipt.status) },
              ]}
            >
              {receipt.status}
            </Text>
          </View>
        </View>
      </View>

      {receipt.date && (
        <View style={styles.row}>
          <MaterialIcons name="calendar-today" size={20} color="#666" />
          <Text style={styles.text}>{receipt.date}</Text>
        </View>
      )}

      <View style={styles.row}>
        <MaterialIcons name="folder" size={20} color="#666" />
        <Text style={styles.text}>{receipt.projectName}</Text>
      </View>

      <View style={styles.row}>
        <FontAwesome name="list-ul" size={20} color="#666" />
        <Text style={styles.text}>{receipt.category}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomPadding }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <Text style={styles.title}>Receipt History</Text>
        {receipts.map((receipt, index) => (
          <ReceiptCard key={index} receipt={receipt} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  badges: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  vatBadge: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  vatText: {
    color: '#8E8E93',
    fontSize: 12,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});

export default ReceiptHistory;
