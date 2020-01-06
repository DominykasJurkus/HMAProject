import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: '#4468e9'
  },
  authContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 60
  },
  appTitle: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '200',
    marginBottom: 30
  },
  authInputLabel: {
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 50
  },
  authTextInput: {
    height: 52,
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    backgroundColor: '#4468e9',
    borderBottomWidth: 2,
    marginBottom: 5,
    marginLeft: 50,
    marginRight: 50,
    borderBottomColor: '#fff'
  },
  authButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 4,
    padding: 16,
    marginTop: 20,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 20
  },
  authLowerText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
    marginTop: 10
  },
  roomsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#4468e9',
  },
  roomsHeader: {
    color: '#fff',
    fontSize: 28,
    top: 20
  },
  roomsInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#f9f9f9',
    borderBottomWidth: 2,
    top: 30
  },
  roomsInput: {
    flex: 1,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    color: '#1E90FF',
    borderColor: '#f9f9f9',
    borderWidth: 2,
    borderRadius: 4,
    margin: 10
  },
  roomsNewButton: {
    alignItems: 'center',
    marginRight: 20
  },
  roomsNewButtonText: {
    color: '#4468e9',
    fontSize: 18
  },
  roomsListContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: '#fff'
  },
  roomLi: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  roomLiText: {
    color: '#4468e9',
    fontSize: 22,
  },
  messagesHeader: {
    backgroundColor: '#4468e9'
  },
  messagesTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '400'
  },
  messagesBackTitle: {
    color: '#fff'
  },
  ////////////
  appName: {
    marginTop: 100,
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center"
  },
  greeting: {
    marginTop: 15,
    marginBottom: 50,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
      height: 72,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 30
  },
  error: {
      color: "#E9446A",
      fontSize: 13,
      fontWeight: "600",
      textAlign: "center"
  },
  form: {
      marginBottom: 48,
      marginHorizontal: 30
  },
  inputTitle: {
      color: "#8A8F9E",
      fontSize: 10,
      textTransform: "uppercase"
  },
  input: {
      borderBottomColor: "#8A8F9E",
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      color: "#161F3D"
  },
  button: {
      marginHorizontal: 30,
      backgroundColor: "#4468e9",
      borderRadius: 4,
      height: 52,
      alignItems: "center",
      justifyContent: "center"
  }
});

export default styles;