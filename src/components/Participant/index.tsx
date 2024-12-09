import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

type ParticipantProps = {
  name: string;
};

export function Participant({ name }: ParticipantProps) {
  function handleParticipantRemove() {}

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
