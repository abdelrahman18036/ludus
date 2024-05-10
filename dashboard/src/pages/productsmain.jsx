import React from 'react';
import { Helmet } from 'react-helmet-async';
import TickPlacementBars from 'src/components/Bars/Bars';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import Territorymap from 'src/data/territory_map.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function ProductsPage() {

    return (
        <>
            <Helmet>
                <title>Devices</title>
            </Helmet>
            <Container maxWidth="xl" className="mt-8 mb-12 p-5 shadow-md rounded-lg">
                <Typography variant="h3" component="h1" className="text-center text-white-800 mb-6">
                    Device Analytics Dashboard
                </Typography>
                <TickPlacementBars />

                <Grid container spacing={2} className="mt-4 pt-10">
                    {Territorymap.map((device, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card raised>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {device.title}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Plate: {device.licence_plate}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Last Moved: {device.time_last_moved.replace(/\/+/g, '/')}
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Mileage: {device.mileage} miles
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Fuel Level: {device.fuel_level}%
                                    </Typography>
                                    <Typography color="textSecondary">
                                        Open: {device.is_open ? 'Yes' : 'No'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
