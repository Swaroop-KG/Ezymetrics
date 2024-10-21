
import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    padding: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
  },
});


const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Report</Text>
      <Text style={styles.content}>This is a sample PDF report.</Text>
    </Page>
  </Document>
);

function Reports() {
  return (
    <div className="reports">
      <h1>Reports</h1>
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="sample-report.pdf"
        style={{ textDecoration: 'none', color: 'blue' }}
      >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
}

export default Reports;
