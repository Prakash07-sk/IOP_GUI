import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './style.scss';
import XLSX from 'xlsx';

export const IopUi = () => {
    const [sheetName, setSheetName] = useState(null);
    const [sheetData, setSheetData] = useState(null);

    const readDataFromExcel = (s_data) => {
        const wb = XLSX.read(s_data);
        setSheetName(wb.sheetNames);


    };

    const handleFile = async (data) => {
        const file = data.target.files[0];
        console.log(file);
        if (!file) return;

        const s_data = await file.arrayBuffer();

        readDataFromExcel(s_data);

    };

    const cancelSheet = () => {
        setSheetName(null)
    }
    return (
        <>
            <Container>


                {sheetName ? (
                    <>
                        <Alert variant="light" onClose={() => cancelSheet()} dismissible className="mt-5">
                            <Alert.Heading>{sheetName}</Alert.Heading>
                        </Alert>

                        <div className="container d-flex align-items-center justify-content-center mt-5">
                            <div className="mb-2">
                                <Button variant="primary" size="lg">
                                    Posting Results
                                </Button>{' '}
                                <Button variant="primary" size="lg" className="mx-4">
                                    Closing Tickets
                                </Button>
                            </div>
                        </div>

                    </>
                ) : (
                    <>
                        <div className="container d-flex align-items-center justify-content-center">
                            <OverlayTrigger
                                key={'top'}
                                placement={'top'}
                                overlay={
                                    <Tooltip id={`tooltip-${'top'}`}>
                                        Upload your Excel sheet
                                    </Tooltip>
                                }>
                                <section className="fileupload">
                                    <input
                                        id="upload" type="file" accept="xlsx, xls" multiple={false}
                                        onChange={(e) => handleFile(e)} />
                                </section>

                            </OverlayTrigger>
                        </div>

                    </>
                )}

            </Container>
        </>
    )
};

