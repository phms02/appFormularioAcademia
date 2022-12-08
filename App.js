import React, { useState, useEffect, useRef } from "react"
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity, Switch, ScrollView } from "react-native"

// Importando o Picker...
import { Picker } from "@react-native-picker/picker"

// Importando o Slider...
import Slider from "@react-native-community/slider"

// Importando o AsyncStorage...
import AsyncStorage from "@react-native-async-storage/async-storage"

// Importando o componente Resposta...
import SalvarResposta from "./src/SalvarResposta"

export default function App() {
  const [nome, setNome] = useState("")  // Variável do nome (input).
  const [idade, setIdade] = useState("")  // Variável da idade (input).
  const [altura, setAltura] = useState(110)  // Variável da altura (slider).
  const [peso, setPeso] = useState(75)  // Variável do peso (slider).
  const [atividades, setAtividades] = useState(false)  // Variável de atividades anteriores (switch).
  const [atividadesPraticadas, setAtividadesPraticadas] = useState("")  // Variável de atividades já praticadas antes (input).
  const [atividadesDesejadas, setAtividadesDesejadas] = useState("")  // Variável de atividades desejadas (input).
  const [lesao, setLesao] = useState(false)  // Variável de lesão anteriores (switch).
  const [qualLesao, setQualLesao] = useState("")  // Variável de lesões sofridas.
  const [sexoUsuario, setSexoUsuario] = useState(0)  // Variável de sexo do usuário.
  const [sexo, setSexo] = useState([
    {
      key: 1,
      nome: "Masculino"
    },

    {
      key: 2,
      nome: "Feminino"
    }
  ])

  const inputRef = useRef(null)

  function enviarDados() {
    if(nome === "") {
      alert("Preencha seu nome!")
      return
    } else if(idade === "") {
      alert("Preencha sua idade!")
      return
    } else if(lesao === true) {
      if(qualLesao === "") {
        alert("Você marcou que teve uma lesão anteriormente. Informe-a!")
        return
      }
    }

    alert(
      "Dados com SUCESSO! \n\n"
      +
      "Nome: " + nome + "\n"
      +
      "Idade: " + idade + "\n"
      +
      "Sexo: " + sexo[sexoUsuario].nome + "\n"
      +
      "Altura: " + altura + "\n"
      +
      "Peso " + peso + "\n"
      +
      "Atividades físicas anteriores: " + (atividades ? "Sim" : "Não") + "\n"
      +
      "Atividades físicas praticadas antes: " + atividadesPraticadas + "\n"
      +
      "Atividades desejadas: " + atividadesDesejadas + "\n"
      +
      "Lesões anteriores: " + (lesao ? "Sim" : "Não") + "\n"
      +
      "Lesões sofridas: " + qualLesao
    )
  }

  function limparInput() {
    inputRef.current.focus()
    inputRef.current.clear()

    console.log(inputRef.current.isFocused())
  }

  // 'v' = value/valor; 'k' = key/chave.
  let sexoAtual = sexo.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={[styles.texto, {marginTop: 12}]}>
            Qual é o seu nome?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome!"
            onChangeText={(name) => setNome(name)}
            ref={inputRef}
          />
        </View>

        <View>
          <Text style={styles.texto}>
            Qual é o seu idade?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua idade!"
            onChangeText={(age) => setIdade(age)}
            keyboardType="numeric"
            ref={inputRef}
          />
        </View>

        <View style={styles.containerAltura}>
          <Text style={[styles.texto, {marginTop: 12}]}>
            Qual é sua altura (em cm)?
          </Text>

          <Text style={styles.alturaMinima}>
            Mínimo: 1
          </Text>

          <Slider
            style={styles.sliderAltura}
            minimumValue={1}
            maximumValue={220}
            value={altura}
            onValueChange={alturaSelecionada => setAltura(alturaSelecionada)}  // Trocando o valor padrão pelo valor selecionado pelo usuário.
            minimumTrackTintColor={'#000FFF'}  // Muda a cor da barra.
            maximumTrackTintColor={'#000C66'}  // muda a cor de fundo da barra quando a barra NÃO está no máximo.
            thumbTintColor={'#2B6AD0'}  // Muda a cor da bola.
          />

          <Text style={styles.alturaMaxima}>
            Máximo: 220
          </Text>
        </View>

        <View style={styles.containerPeso}>
          <Text style={styles.texto}>
            Qual é o seu peso (em kgs)?
          </Text>

          <Text style={styles.pesoMinimo}>
            Mínimo: 0
          </Text>

          <Slider
            style={styles.sliderPeso}
            minimumValue={0}
            maximumValue={150}
            value={peso}
            onValueChange={pesoSelecionado => setPeso(pesoSelecionado)}  // Trocando o valor padrão pelo valor selecionado pelo usuário.
            minimumTrackTintColor={'#000FFF'}  // Muda a cor da barra.
            maximumTrackTintColor={'#000C66'}  // muda a cor de fundo da barra quando a barra NÃO está no máximo.
            thumbTintColor={'#2B6AD0'}  // Muda a cor da bola.
          />

          <Text style={styles.pesoMaximo}>
            Máximo: 150
          </Text>
        </View>

        <View style={[{marginTop: 1, marginBottom: 10}]}>
          <Text style={styles.texto}>
            Qual é o seu sexo?
          </Text>

          <Picker
            style={{color: '#F8D210'}}
            selectedValue={sexoUsuario}
            onValueChange={
              (itemValue, itemIndex) => setSexoUsuario(itemValue)
            }
          >
            {sexoAtual}
          </Picker>
        </View>

        <View style={styles.containerAtividade}>
          <Text style={styles.texto}>
            Já praticou atividades físicas?
          </Text>

          <View style={styles.viewSwitchAtividade}>
            <Switch
              style={styles.switchAtividade}
              value={atividades}
              onValueChange={(atividadeFisica) => setAtividades(atividadeFisica)}
              trackColor={{false: '#FF0000', true: '#0c9b10'}} thumbColor={atividades ? '#48b53e' : '#c63730'}
            />
          </View>
        </View>

        <View>
          <Text style={[styles.texto, {marginTop: 12}]}>
            Qual atividade(s) você já praticou?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite a(s) atividade(s) aqui!"
            onChangeText={(activity) => setAtividadesPraticadas(activity)}
            ref={inputRef}
          />

          <View style={styles.containerLesao}>
            <Text style={[styles.texto, {marginTop: 12}]}>
              Já se lesionou alguma vez?
            </Text>

            <View style={styles.viewSwitchLesao}>
              <Switch
                style={styles.switchLesao}
                value={lesao}
                onValueChange={(teveLesao) => setLesao(teveLesao)}
                trackColor={{false: '#FF0000', true: '#0c9b10'}} thumbColor={lesao ? '#48b53e' : '#c63730'}
              />
            </View>
          </View>

          <Text style={[styles.texto, { marginTop: 8, paddingTop: 7 }]}>
            Quais lesões você já teve?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite a lesão aqui!"
            onChangeText={(qualLesao) => setQualLesao(qualLesao)}
            ref={inputRef}
          />

          <Text style={[styles.texto, { marginTop: 8, paddingTop: 7 }]}>
            Quais são as atividades de seu interesse?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite a atividade aqui!"
            onChangeText={(activity) => setAtividadesDesejadas(activity)}
            ref={inputRef}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={enviarDados}
          >
            <Text style={styles.btnText}>
              Enviar dados!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0E86D4'
  },

  texto:{
    fontWeight: "bold",
    fontSize: 18,
    color: '#FFFFFF',
    // color: '#E10032',
    // color: '',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },

  input:{
    fontSize: 18,
    fontWeight: "bold",
    color: '#F8D210',
    borderColor: '#2FF3E0',
    borderWidth: 1,
    marginLeft: 10,
    marginRigth: 50,
    paddingBottom: 15,
    width: '95%'
  },

  containerAltura:{
    // marginTop: 15
  },

  sliderAltura:{
    marginLeft: 2,
    marginRight: 5
  },

  alturaMinima: {
    fontWeight: "bold",
    textAlign: "left",
    color: '#0000FF',
    marginLeft: 15,
    marginRight: 15
  },

  alturaMaxima: {
    fontWeight: "bold",
    textAlign: "right",
    color: '#0000FF',
    marginRight: 20,
    paddingBottom: 10
  },

  sliderPeso:{
    marginLeft: 2,
    marginRight: 5
  },

  pesoMinimo: {
    fontWeight: "bold",
    textAlign: "left",
    color: '#0000FF',
    marginLeft: 15,
    marginRight: 15
  },

  pesoMaximo: {
    fontWeight: "bold",
    textAlign: "right",
    color: '#0000FF',
    marginRight: 20,
    paddingBottom: 10
  },

  containerAtividade:{
    flexDirection: "row",
    marginTop: 5
  },

  switchAtividade:{
    marginTop: 10,
    marginLeft: 10,
    paddingTop: 20,
    height: 25
  },

  containerLesao:{
    flexDirection: "row"
  },

  switchLesao:{
    marginTop: 17,
    marginLeft: 10,
    paddingTop: 20,
    height: 25
  },

  btn:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000000',
    borderRadius: 50,
    marginTop: 25,
    marginLeft: 150,
    marginBottom: 30,
    padding: 15,
    width: '30%'
  },

  btnText:{
    fontSize: 15,
    color: '#FFFFFF',
  }
})