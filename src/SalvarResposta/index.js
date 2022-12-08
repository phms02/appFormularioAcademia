import React, { useState, useEffect } from "react"
import { View, Text, Image } from "react-native"

// Importando o AsyncStorage...
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function SalvarResposta() {
  return (
    function mostrarResposta() {
      useEffect(() => {
        async function loadNome() {
          await AsyncStorage.getItem("@nome").then((valor) => {
            setNome(valor)
          })
        }

        loadNome()
      }, [nome])

      useEffect(() => {
        async function loadIdade() {
          await AsyncStorage.getItem("@idade").then((valor) => {
            setIdade(valor)
              })
            }

            loadIdade()
        }, [idade])

        useEffect(() => {
          async function loadAltura() {
            await AsyncStorage.getItem("@altura").then((valor) => {
              setAltura(valor)
            })
          }

          loadAltura()
        }, [altura])

        useEffect(() => {
          async function loadPeso() {
            await AsyncStorage.getItem("@peso").then((valor) => {
               setPeso(valor)
            })
          }

          loadPeso()
        }, [peso])

        useEffect(() => {
          async function loadSexo() {
            await AsyncStorage.getItem("@sexo").then((valor) => {
              sexoUsuario(valor)
            })
          }

          loadSexo()
        }, [sexoUsuario])

        useEffect(() => {
          async function loadAtividadesAnteriores() {
            await AsyncStorage.getItem("@atividadesAnteriores").then((valor) => {
              setAtividades(valor)
            })
          }

          loadAtividadesAnteriores()
        }, [atividades])

        useEffect(() => {
          async function loadAtividadesPraticadas() {
            await AsyncStorage.getItem("@atividadesPraticadas").then((valor) => {
              setatividadesPraticadas(valor)
            })
          }

          loadAtividadesPraticadas()
        }, [atividadesPraticadas])

        useEffect(() => {
          async function loadAtividadesDesejadas() {
            await AsyncStorage.getItem("@atividadesDesejadas").then((valor) => {
              setAtividadesDesejadas(valor)
            })
          }

          loadAtividadesDesejadas()
        }, [atividadesDesejadas])

        useEffect(() => {
          async function loadlesao() {
            await AsyncStorage.getItem("@lesao").then((valor) =>{
              setLesao(valor)
            })
          }

          loadlesao()
        }, [lesao])

        useEffect(() => {
          async function loadqualLesao() {
            await AsyncStorage.getItem("@qualLesao").then((valor) => {
              setQualLesao(valor)
            })
          }

          loadqualLesao()
        }, [qualLesao])
    },

    async function salvarNome() {
      await AsyncStorage.setItem("@nome", nome)
      setNome(nome)

      setNome("")
    },

    async function salvarIdade() {
      await AsyncStorage.setItem("@idade", nome)
      setIdade(idade)

      setIdade("")
    },

    async function salvarAltura() {
      await AsyncStorage.setItem("@altura", altura)
      setIdade(altura)

      setAltura(110)
    },

    async function salvarPeso() {
      await AsyncStorage.setItem("@peso", peso)
      setPeso(peso)

      setPeso(75)
    },

    async function salvarPeso() {
      await AsyncStorage.setItem("@sexo", sexo)
      setSexoUsuario(sexo)

      setSexo(0)
    },

    async function salvarAtividadesAnteriores() {
      await AsyncStorage.setItem("@atividadesAnteriores", atividades)
      setAtividades(atividades)

      setAtividades(false)
    },

    async function salvarAtividadesPraticadas() {
      await AsyncStorage.setItem("@atividadesPraticadas", atividadesPraticadas)
      setAtividadesPraticadas(atividadesPraticadas)

      setAtividadesPraticadas("")
    },

    async function salvarAtividadesDesejadas() {
      await AsyncStorage.setItem("@atividadesDesejadas", atividadesPraticadas)
      setAtividadesDesejadas(atividadesDesejadas)

      setAtividadesDesejadas("")
    },

    async function salvarLesao() {
      await AsyncStorage.setItem("@lesao", lesao)
      setLesao(lesao)

      setLesao(false)
    },

    async function salvarQualLesao() {
      await AsyncStorage.setItem("@quaLesao", lesao)
      setQualLesao(qualLesao)

      setQualLesao("")
    }
  )
}