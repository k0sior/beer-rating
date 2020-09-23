import React from 'react'


export class InputForm extends React.Component {

  render() {
    const submitForm = this.props.submitForm;
    return (
      <div htmlFor='inputFormWrapper' id="inputForm" className="inputFormWrapper">
        <form htmlFor='inputForm'>
          <table htmlFor='inputFormTable'
            cellSpacing="20"
            cellPadding="5">
            <tbody>
              <tr>
                <td colSpan="2">
                  <label htmlFor='name'>Nazwa</label><br />
                  <input
                    type='text'
                    id='beerInputName'
                    name='name'
                    required
                    style={{
                      width: 378,
                    }}>
                  </input>
                  <table
                    cellSpacing="0"
                    cellPadding="0"
                    style={{
                      margin: 0,
                      padding: 0,
                    }}>
                    <tbody>
                      <tr>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='type'>Gatunek piwa</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputType'
                              name='type'
                              required
                              style={{
                                width: 180,
                                marginRight: 10,
                              }}>
                            </input>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='alcohol'>Zawartość alkoholu</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputAlcohol'
                              name='alcohol'
                              required
                              style={{
                                width: 180,
                                marginRight: 10,
                              }}>
                            </input>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan="3">
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='extract'>Ekstrakt</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputExtract'
                              name="extract"
                              style={{
                                width: 114,
                                marginRight: 10,
                              }}>
                            </input>
                          </div>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='ibu'>IBU</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputIbu'
                              name="ibu"
                              style={{
                                width: 114,
                                marginRight: 10,
                              }}>
                            </input>
                          </div>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='hop'>Rodzaj chmielu</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputHop'
                              name='hop'
                              style={{
                                width: 114,
                                marginRight: 10,
                              }}>
                            </input>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='producer'>Producent/Importer</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputProducer'
                              name='producer'
                              required
                              style={{
                                width: 180,
                                marginRight: 10,
                              }}>
                            </input>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='country'>Kraj pochodzenia</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputCountry'
                              name='country'
                              required
                              style={{
                                width: 180,
                                marginRight: 10,
                              }}>
                            </input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <label htmlFor='photo'>Zdjęcie</label>
                  <br />
                  <input
                    type="url"
                    id='beerInputPhoto'
                    name='photo'
                    placeholder="URL do zdjęcia"
                    style={{
                      width: 378,
                    }}>
                  </input>
                  <br /> <br />
                  <label htmlFor='description'>Dodaj opis</label>
                  <br />
                  <textarea
                    style={{
                      width: 378,
                      height: 200,
                    }}
                    id='beerInputDescription'
                    name='description'>
                  </textarea>
                </td>
              </tr>
              <tr>
                <td style={{
                  textAlign: "center",
                }}>
                  <button type="submit" id="submitFormButton" onClick={submitForm}>Prześlij</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

      </div>
    )
  }
}