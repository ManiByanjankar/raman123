import { useBottomPadding } from '@/hooks/useBottomNavigationPadding';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ReceiptDetails() {
  const bottomPadding = useBottomPadding();

  const attachments = [
    { id: 1, name: 'Invoice_2024_001.pdf' },
    { id: 2, name: 'Receipt_Details.pdf' },
    { id: 3, name: 'Additional_Notes.pdf' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#2563eb" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Receipt Details</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomPadding }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        {/* Main Card */}
        <View style={styles.mainCard}>
          <View style={styles.amountContainer}>
            <Text style={styles.amountLabel}>Total Amount</Text>
            <Text style={styles.amount}>Rs. 2,100</Text>
            <View style={styles.tags}>
              <View style={styles.vatTag}>
                <Text style={styles.tagText}>VAT</Text>
              </View>
              <View style={styles.reimbursedTag}>
                <Text style={styles.tagText}>Reimbursed</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Ionicons name="calendar-outline" size={20} color="#64748b" />
              <Text style={styles.detailLabel}>Date:</Text>
              <Text style={styles.detailText}>21 July, 2024</Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="briefcase-outline" size={20} color="#64748b" />
              <Text style={styles.detailLabel}>Project:</Text>
              <Text style={styles.detailText}>Project Name demo</Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="folder-outline" size={20} color="#64748b" />
              <Text style={styles.detailLabel}>Category:</Text>
              <Text style={styles.detailText}>Category Name</Text>
            </View>

            <View style={styles.vatAmountContainer}>
              <Text style={styles.vatAmountLabel}>VAT Amount:</Text>
              <Text style={styles.vatAmount}>Rs. 162</Text>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionLabel}>Description</Text>
              <Text style={styles.description}>
                yo description rakhne thau ho ra yo bill Aakash le pay gareko ho
              </Text>
            </View>
          </View>
        </View>

        {/* Attachments Section */}
        <View style={styles.attachmentsSection}>
          <Text style={styles.attachmentsTitle}>Attachments</Text>
          <Text style={styles.attachmentsSubtitle}>
            List of all the attachments
          </Text>

          {attachments.map((attachment, index) => (
            <View
              key={attachment.id}
              style={[
                styles.attachmentItem,
                index === attachments.length - 1 && styles.lastAttachmentItem,
              ]}
            >
              <View style={styles.attachmentLeft}>
                <View style={styles.fileIconContainer}>
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    size={24}
                    color="#2563eb"
                  />
                </View>
                <Text style={styles.attachmentName}>{attachment.name}</Text>
              </View>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  headerContainer: {
    backgroundColor: '#ffffff',
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#e0e7ff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 12,
    color: '#1e293b',
  },
  scrollView: {
    flex: 1,
  },
  mainCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  amountContainer: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#2563eb',
  },
  amountLabel: {
    color: '#e0e7ff',
    fontSize: 14,
    marginBottom: 4,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  tags: {
    flexDirection: 'row',
    gap: 12,
  },
  vatTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  reimbursedTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  detailsContainer: {
    padding: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 15,
    color: '#64748b',
    marginLeft: 12,
    width: 80,
  },
  detailText: {
    fontSize: 15,
    color: '#1e293b',
    flex: 1,
  },
  vatAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  vatAmountLabel: {
    fontSize: 15,
    color: '#64748b',
    flex: 1,
  },
  vatAmount: {
    fontSize: 15,
    color: '#2563eb',
    fontWeight: '600',
  },
  descriptionContainer: {
    marginTop: 20,
  },
  descriptionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#64748b',
    lineHeight: 22,
  },
  attachmentsSection: {
    backgroundColor: '#ffffff',
    margin: 16,
    marginTop: 0,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  attachmentsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  attachmentsSubtitle: {
    color: '#64748b',
    fontSize: 14,
    marginBottom: 20,
  },
  attachmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  lastAttachmentItem: {
    borderBottomWidth: 0,
    paddingBottom: 0,
  },
  attachmentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fileIconContainer: {
    backgroundColor: '#e0e7ff',
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
  },
  attachmentName: {
    fontSize: 15,
    color: '#1e293b',
    flex: 1,
  },
  viewButton: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  viewButtonText: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '600',
  },
});
