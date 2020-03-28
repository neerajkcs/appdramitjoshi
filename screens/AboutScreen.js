import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={globalStyles.titleText}>About Dr. Amit Joshi</Text>
          <Text style={globalStyles.paragraph}>Dr.Amit ,Believe that most sex problems occur due to lack of proper education and insufficient time given by sexologist/ sex specialist / expert on their patients, Dr Joshi aims to provide best possible advice (by his team of Sexologists/Sex Specialists) through online consultation to help men  and women in india and around the world to overcome their sexual problems.</Text>
          <Text style={globalStyles.paragraph}>Through our online consultation, we are providing consultation, knowledge and treatments for the followings:  Erectile  Dysfunction  (Due to Diabetes,hypertension,  Age Factor, or other Medical Conditions), possible reasons behind Erectile Dysfunction ,Premature Ejaculation and reasons behind Premature Ejaculation, Female Sex Problems, Loss of Libido (Low Sex Desire).</Text>
          <Text style={globalStyles.paragraph}>Infect I Dr AMIT JOSHI Believe , Almost all sex related problems are curable through the right combination of counseling, medication and in some rare cases surgery (Phalloplasty, Penile Implant, Vaginoplasty, Hymnoplasty). Unfortunately the majority of people who suffer from sexual problems do so in silence and never take help of properly qualified medical personnel. The result is ruined relationships, divorce, loss of self confidence and self esteem and increased level of stress. This is totally AVOIDABLE. We understand that talking about and seeking a solution for your sex related problem can be embarrassing and intimidating and that is why we 100% GAURANTEE YOUR PRIVACY. Your details will NEVER be shared with any third party. The unique blend of counseling and medication that I have developed and perfected during the last Few years of my practice will ensure that:</Text>
          <Text style={globalStyles.paragraph}>You and your partner can start enjoying sex like never before! (All your doubts and frustrations will disappear and you will emerge as a new and fully confident person.</Text>
          <Text style={globalStyles.paragraph}>I believe there is always hope, possibility, solutions and potential. Whatever are your concerns, compassion and sensitivity are at the root of my approach to healing. Be Assured that whatever I tell you shall be very scientific and evidence based.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

AboutScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
