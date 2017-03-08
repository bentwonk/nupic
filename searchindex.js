Search.setIndex({docnames:["algorithms","classifiers","encoders","index","io","network","network-network","network-regions","network-sensors","opf","opf-metrics","opf-models","opf-utils","spatial-pooler","temporal-memory","utils"],envversion:50,filenames:["algorithms.rst","classifiers.rst","encoders.rst","index.rst","io.rst","network.rst","network-network.rst","network-regions.rst","network-sensors.rst","opf.rst","opf-metrics.rst","opf-models.rst","opf-utils.rst","spatial-pooler.rst","temporal-memory.rst","utils.rst"],objects:{"nupic.algorithms.CLAClassifier":{CLAClassifier:[1,0,1,""]},"nupic.algorithms.CLAClassifier.CLAClassifier":{compute:[1,1,1,""],infer:[1,1,1,""]},"nupic.algorithms.sdr_classifier":{SDRClassifier:[1,0,1,""]},"nupic.algorithms.sdr_classifier.SDRClassifier":{compute:[1,1,1,""],infer:[1,1,1,""],inferSingleStep:[1,1,1,""]},"nupic.bindings.regions.PyRegion":{PyRegion:[7,0,1,""]},"nupic.bindings.regions.PyRegion.PyRegion":{compute:[7,1,1,""],deSerializeExtraData:[7,1,1,""],executeMethod:[7,1,1,""],getOutputElementCount:[7,1,1,""],getParameter:[7,1,1,""],getParameterArray:[7,1,1,""],getParameterArrayCount:[7,1,1,""],getProtoType:[7,2,1,""],getSpec:[7,3,1,""],guardedCompute:[7,1,1,""],initialize:[7,1,1,""],read:[7,3,1,""],readFromProto:[7,3,1,""],serializeExtraData:[7,1,1,""],setParameter:[7,1,1,""],setParameterArray:[7,1,1,""],write:[7,1,1,""],writeToProto:[7,1,1,""]},"nupic.data.fieldmeta":{FieldMetaType:[2,0,1,""]},"nupic.data.fieldmeta.FieldMetaType":{"boolean":[2,4,1,""],"float":[2,4,1,""],_ALL:[2,4,1,""],datetime:[2,4,1,""],integer:[2,4,1,""],isValid:[2,3,1,""],list:[2,4,1,""],sdr:[2,4,1,""],string:[2,4,1,""]},"nupic.data.file_record_stream":{FileRecordStream:[4,0,1,""]},"nupic.data.file_record_stream.FileRecordStream":{appendRecord:[4,1,1,""],appendRecords:[4,1,1,""],clearStats:[4,1,1,""],getBookmark:[4,1,1,""],getDataRowCount:[4,1,1,""],getError:[4,1,1,""],getFieldNames:[4,1,1,""],getFields:[4,1,1,""],getLastRecords:[4,1,1,""],getNextRecord:[4,1,1,""],getNextRecordIdx:[4,1,1,""],getRecordsRange:[4,1,1,""],getStats:[4,1,1,""],isCompleted:[4,1,1,""],next:[4,1,1,""],recordsExistAfter:[4,1,1,""],rewind:[4,1,1,""],seekFromEnd:[4,1,1,""],setAutoRewind:[4,1,1,""],setCompleted:[4,1,1,""],setError:[4,1,1,""],setTimeout:[4,1,1,""]},"nupic.encoders.base":{Encoder:[2,0,1,""]},"nupic.encoders.base.Encoder":{closenessScores:[2,1,1,""],decode:[2,1,1,""],decodedToStr:[2,1,1,""],encode:[2,1,1,""],encodeIntoArray:[2,1,1,""],encodedBitDescription:[2,1,1,""],formatBits:[2,1,1,""],getBucketIndices:[2,1,1,""],getBucketInfo:[2,1,1,""],getBucketValues:[2,1,1,""],getDecoderOutputFieldTypes:[2,1,1,""],getDescription:[2,1,1,""],getDisplayWidth:[2,1,1,""],getEncodedValues:[2,1,1,""],getEncoderList:[2,1,1,""],getFieldDescription:[2,1,1,""],getScalarNames:[2,1,1,""],getScalars:[2,1,1,""],getWidth:[2,1,1,""],pprint:[2,1,1,""],pprintHeader:[2,1,1,""],scalarsToStr:[2,1,1,""],setFieldStats:[2,1,1,""],setLearning:[2,1,1,""],setStateLock:[2,1,1,""],topDownCompute:[2,1,1,""]},"nupic.encoders.date":{DateEncoder:[2,0,1,""]},"nupic.encoders.date.DateEncoder":{encodeIntoArray:[2,1,1,""],getBucketIndices:[2,1,1,""],getEncodedValues:[2,1,1,""],getScalarNames:[2,1,1,""],getScalars:[2,1,1,""]},"nupic.encoders.multi":{MultiEncoder:[2,0,1,""]},"nupic.encoders.multi.MultiEncoder":{addMultipleEncoders:[2,1,1,""],getWidth:[2,1,1,""]},"nupic.encoders.random_distributed_scalar":{RandomDistributedScalarEncoder:[2,0,1,""]},"nupic.encoders.random_distributed_scalar.RandomDistributedScalarEncoder":{encodeIntoArray:[2,1,1,""],getBucketIndices:[2,1,1,""],getDecoderOutputFieldTypes:[2,1,1,""],getWidth:[2,1,1,""],mapBucketIndexToNonZeroBits:[2,1,1,""]},"nupic.encoders.scalar":{ScalarEncoder:[2,0,1,""]},"nupic.encoders.scalar.ScalarEncoder":{closenessScores:[2,1,1,""],decode:[2,1,1,""],encodeIntoArray:[2,1,1,""],getBucketIndices:[2,1,1,""],getBucketInfo:[2,1,1,""],getBucketValues:[2,1,1,""],getDecoderOutputFieldTypes:[2,1,1,""],topDownCompute:[2,1,1,""]},"nupic.engine":{Network:[6,0,1,""],common_networks:[15,5,0,"-"]},"nupic.engine.Network":{addRegion:[6,1,1,""],addRegionFromBundle:[6,1,1,""],disableProfiling:[6,1,1,""],enableProfiling:[6,1,1,""],getCallbacks:[6,1,1,""],getRegionsByType:[6,1,1,""],initialize:[6,1,1,""],link:[6,1,1,""],maxEnabledPhase:[6,4,1,""],maxPhase:[6,4,1,""],minEnabledPhase:[6,4,1,""],minPhase:[6,4,1,""],regions:[6,4,1,""],registerRegion:[6,2,1,""],removeLink:[6,1,1,""],removeRegion:[6,1,1,""],resetProfiling:[6,1,1,""],run:[6,1,1,""],save:[6,1,1,""],setPhases:[6,1,1,""],unregisterRegion:[6,2,1,""]},"nupic.engine.common_networks":{createTemporalAnomaly:[15,6,1,""]},"nupic.frameworks":{opf:[9,5,0,"-"]},"nupic.frameworks.opf":{opfhelpers:[12,5,0,"-"]},"nupic.frameworks.opf.clamodel":{CLAModel:[11,0,1,""]},"nupic.frameworks.opf.clamodel.CLAModel":{disableLearning:[11,1,1,""],enableLearning:[11,1,1,""],finishLearning:[11,1,1,""],getFieldInfo:[11,1,1,""],getRuntimeStats:[11,1,1,""],resetSequenceStates:[11,1,1,""],run:[11,1,1,""]},"nupic.frameworks.opf.common_models":{cluster_params:[12,5,0,"-"]},"nupic.frameworks.opf.common_models.cluster_params":{getScalarMetricWithTimeOfDayAnomalyParams:[12,6,1,""]},"nupic.frameworks.opf.metrics":{AggregateMetric:[10,0,1,""],CustomErrorMetric:[10,0,1,""],MetricAccuracy:[10,0,1,""],MetricAveError:[10,0,1,""],MetricMovingMode:[10,0,1,""],MetricMultiStep:[10,0,1,""],MetricNegAUC:[10,0,1,""],MetricPassThruPrediction:[10,0,1,""],MetricSpec:[10,0,1,""],MetricTrivial:[10,0,1,""],MetricTwoGram:[10,0,1,""],MetricsIface:[10,0,1,""]},"nupic.frameworks.opf.metrics.AggregateMetric":{accumulate:[10,1,1,""],aggregate:[10,1,1,""]},"nupic.frameworks.opf.metrics.CustomErrorMetric":{CircularBuffer:[10,0,1,""],expValue:[10,1,1,""],mostLikely:[10,1,1,""]},"nupic.frameworks.opf.metrics.MetricNegAUC":{accumulate:[10,1,1,""]},"nupic.frameworks.opf.metrics.MetricPassThruPrediction":{addInstance:[10,1,1,""],getMetric:[10,1,1,""]},"nupic.frameworks.opf.metrics.MetricSpec":{getInferenceTypeFromLabel:[10,3,1,""],getLabel:[10,1,1,""]},"nupic.frameworks.opf.metrics.MetricsIface":{addInstance:[10,1,1,""],getMetric:[10,1,1,""]},"nupic.frameworks.opf.model":{Model:[11,0,1,""]},"nupic.frameworks.opf.model.Model":{disableInference:[11,1,1,""],disableLearning:[11,1,1,""],enableInference:[11,1,1,""],enableLearning:[11,1,1,""],finishLearning:[11,1,1,""],getFieldInfo:[11,1,1,""],getInferenceArgs:[11,1,1,""],getInferenceType:[11,1,1,""],getProtoType:[11,2,1,""],getRuntimeStats:[11,1,1,""],isInferenceEnabled:[11,1,1,""],isLearningEnabled:[11,1,1,""],load:[11,3,1,""],read:[11,3,1,""],readFromCheckpoint:[11,3,1,""],resetSequenceStates:[11,1,1,""],run:[11,1,1,""],save:[11,1,1,""],setFieldStatistics:[11,1,1,""],write:[11,1,1,""],writeToCheckpoint:[11,1,1,""]},"nupic.frameworks.opf.modelfactory":{ModelFactory:[11,0,1,""]},"nupic.frameworks.opf.modelfactory.ModelFactory":{create:[11,2,1,""],loadFromCheckpoint:[11,2,1,""]},"nupic.frameworks.opf.opfhelpers":{getExperimentDescriptionInterfaceFromModule:[12,6,1,""],loadExperiment:[12,6,1,""],loadExperimentDescriptionScriptFromDir:[12,6,1,""]},"nupic.frameworks.opf.predictionmetricsmanager":{MetricsManager:[10,0,1,""]},"nupic.frameworks.opf.predictionmetricsmanager.MetricsManager":{getMetricDetails:[10,1,1,""],getMetricLabels:[10,1,1,""],getMetrics:[10,1,1,""],update:[10,1,1,""]},"nupic.frameworks.opf.two_gram_model":{TwoGramModel:[11,0,1,""]},"nupic.frameworks.opf.two_gram_model.TwoGramModel":{finishLearning:[11,1,1,""],getFieldInfo:[11,1,1,""],getRuntimeStats:[11,1,1,""],resetSequenceStates:[11,1,1,""],run:[11,1,1,""],setFieldStatistics:[11,1,1,""]},"nupic.regions.AnomalyLikelihoodRegion":{AnomalyLikelihoodRegion:[7,0,1,""]},"nupic.regions.AnomalyRegion":{AnomalyRegion:[7,0,1,""]},"nupic.regions.CLAClassifierRegion":{CLAClassifierRegion:[7,0,1,""]},"nupic.regions.CLAClassifierRegion.CLAClassifierRegion":{compute:[7,1,1,""],customCompute:[7,1,1,""],getAlgorithmInstance:[7,1,1,""],getOutputElementCount:[7,1,1,""],getOutputValues:[7,1,1,""],getParameter:[7,1,1,""],getProtoType:[7,2,1,""],readFromProto:[7,3,1,""],setParameter:[7,1,1,""],writeToProto:[7,1,1,""]},"nupic.regions.KNNAnomalyClassifierRegion":{KNNAnomalyClassifierRegion:[7,0,1,""]},"nupic.regions.KNNAnomalyClassifierRegion.KNNAnomalyClassifierRegion":{addLabel:[7,1,1,""],classifyState:[7,1,1,""],classifyStates:[7,1,1,""],compute:[7,1,1,""],constructClassificationRecord:[7,1,1,""],getLabelResults:[7,1,1,""],getLabels:[7,1,1,""],getParameter:[7,1,1,""],removeLabels:[7,1,1,""],setParameter:[7,1,1,""]},"nupic.regions.KNNClassifierRegion":{KNNClassifierRegion:[7,0,1,""]},"nupic.regions.KNNClassifierRegion.KNNClassifierRegion":{compute:[7,1,1,""],disableTap:[7,1,1,""],doInference:[7,1,1,""],enableTap:[7,1,1,""],getAlgorithmInstance:[7,1,1,""],getAllDistances:[7,1,1,""],getCategoryList:[7,1,1,""],getLatestDistances:[7,1,1,""],getOutputElementCount:[7,1,1,""],getParameter:[7,1,1,""],handleLogInput:[7,1,1,""],handleLogOutput:[7,1,1,""],setParameter:[7,1,1,""]},"nupic.regions.PluggableEncoderSensor":{PluggableEncoderSensor:[8,0,1,""]},"nupic.regions.PluggableEncoderSensor.PluggableEncoderSensor":{setSensedValue:[8,1,1,""]},"nupic.regions.RecordSensor":{RecordSensor:[8,0,1,""]},"nupic.regions.RecordSensor.RecordSensor":{applyFilters:[8,1,1,""],compute:[8,1,1,""],getNextRecord:[8,1,1,""],getOutputElementCount:[8,1,1,""],getOutputValues:[8,1,1,""],getProtoType:[8,2,1,""],populateCategoriesOut:[8,1,1,""],readFromProto:[8,3,1,""],rewind:[8,1,1,""],setParameter:[8,1,1,""],writeToProto:[8,1,1,""]},"nupic.regions.SDRClassifierRegion":{SDRClassifierRegion:[7,0,1,""]},"nupic.regions.SDRClassifierRegion.SDRClassifierRegion":{compute:[7,1,1,""],customCompute:[7,1,1,""],getAlgorithmInstance:[7,1,1,""],getOutputElementCount:[7,1,1,""],getParameter:[7,1,1,""],getProtoType:[7,2,1,""],initialize:[7,1,1,""],readFromProto:[7,3,1,""],setParameter:[7,1,1,""],writeToProto:[7,1,1,""]},"nupic.regions.SPRegion":{SPRegion:[7,0,1,""]},"nupic.regions.SPRegion.SPRegion":{compute:[7,1,1,""],getAlgorithmInstance:[7,1,1,""],getBaseSpec:[7,3,1,""],getParameter:[7,1,1,""],getProtoType:[7,2,1,""],getSpec:[7,3,1,""],readFromProto:[7,3,1,""],setParameter:[7,1,1,""],writeToProto:[7,1,1,""]},"nupic.regions.TPRegion":{TPRegion:[7,0,1,""]},"nupic.regions.TPRegion.TPRegion":{compute:[7,1,1,""],deSerializeExtraData:[7,1,1,""],finishLearning:[7,1,1,""],getAlgorithmInstance:[7,1,1,""],getBaseSpec:[7,3,1,""],getParameter:[7,1,1,""],getSpec:[7,3,1,""],resetSequenceStates:[7,1,1,""],serializeExtraData:[7,1,1,""],setParameter:[7,1,1,""]},"nupic.research":{spatial_pooler:[13,5,0,"-"],temporal_memory:[14,5,0,"-"]},"nupic.research.spatial_pooler":{SpatialPooler:[13,0,1,""]},"nupic.research.spatial_pooler.SpatialPooler":{compute:[13,1,1,""],getActiveDutyCycles:[13,1,1,""],getBoostFactors:[13,1,1,""],getBoostStrength:[13,1,1,""],getBoostedOverlaps:[13,1,1,""],getColumnDimensions:[13,1,1,""],getConnectedCounts:[13,1,1,""],getConnectedSynapses:[13,1,1,""],getDutyCyclePeriod:[13,1,1,""],getGlobalInhibition:[13,1,1,""],getInhibitionRadius:[13,1,1,""],getInputDimensions:[13,1,1,""],getIterationLearnNum:[13,1,1,""],getIterationNum:[13,1,1,""],getLocalAreaDensity:[13,1,1,""],getMinOverlapDutyCycles:[13,1,1,""],getMinPctOverlapDutyCycles:[13,1,1,""],getNumActiveColumnsPerInhArea:[13,1,1,""],getNumColumns:[13,1,1,""],getNumInputs:[13,1,1,""],getOverlapDutyCycles:[13,1,1,""],getOverlaps:[13,1,1,""],getPermanence:[13,1,1,""],getPotential:[13,1,1,""],getPotentialPct:[13,1,1,""],getPotentialRadius:[13,1,1,""],getSpVerbosity:[13,1,1,""],getStimulusThreshold:[13,1,1,""],getSynPermActiveInc:[13,1,1,""],getSynPermBelowStimulusInc:[13,1,1,""],getSynPermConnected:[13,1,1,""],getSynPermInactiveDec:[13,1,1,""],getSynPermTrimThreshold:[13,1,1,""],getUpdatePeriod:[13,1,1,""],printParameters:[13,1,1,""],setActiveDutyCycles:[13,1,1,""],setBoostFactors:[13,1,1,""],setBoostStrength:[13,1,1,""],setDutyCyclePeriod:[13,1,1,""],setGlobalInhibition:[13,1,1,""],setInhibitionRadius:[13,1,1,""],setIterationLearnNum:[13,1,1,""],setIterationNum:[13,1,1,""],setLocalAreaDensity:[13,1,1,""],setMinOverlapDutyCycles:[13,1,1,""],setMinPctOverlapDutyCycles:[13,1,1,""],setNumActiveColumnsPerInhArea:[13,1,1,""],setOverlapDutyCycles:[13,1,1,""],setPermanence:[13,1,1,""],setPotential:[13,1,1,""],setPotentialPct:[13,1,1,""],setPotentialRadius:[13,1,1,""],setSpVerbosity:[13,1,1,""],setStimulusThreshold:[13,1,1,""],setSynPermActiveInc:[13,1,1,""],setSynPermBelowStimulusInc:[13,1,1,""],setSynPermConnected:[13,1,1,""],setSynPermInactiveDec:[13,1,1,""],setSynPermTrimThreshold:[13,1,1,""],setUpdatePeriod:[13,1,1,""],stripUnlearnedColumns:[13,1,1,""]},"nupic.research.temporal_memory":{TemporalMemory:[14,0,1,""]},"nupic.research.temporal_memory.TemporalMemory":{activateCells:[14,1,1,""],activateDendrites:[14,1,1,""],activatePredictedColumn:[14,1,1,""],burstColumn:[14,1,1,""],cellsForColumn:[14,1,1,""],columnForCell:[14,1,1,""],compute:[14,1,1,""],connectionsFactory:[14,2,1,""],getActivationThreshold:[14,1,1,""],getActiveCells:[14,1,1,""],getActiveSegments:[14,1,1,""],getCellIndex:[14,2,1,""],getCellIndices:[14,3,1,""],getCellsPerColumn:[14,1,1,""],getColumnDimensions:[14,1,1,""],getConnectedPermanence:[14,1,1,""],getInitialPermanence:[14,1,1,""],getMatchingSegments:[14,1,1,""],getMaxNewSynapseCount:[14,1,1,""],getMaxSegmentsPerCell:[14,1,1,""],getMaxSynapsesPerSegment:[14,1,1,""],getMinThreshold:[14,1,1,""],getPermanenceDecrement:[14,1,1,""],getPermanenceIncrement:[14,1,1,""],getPredictedSegmentDecrement:[14,1,1,""],getPredictiveCells:[14,1,1,""],getWinnerCells:[14,1,1,""],mapCellsToColumns:[14,1,1,""],numberOfCells:[14,1,1,""],numberOfColumns:[14,1,1,""],punishPredictedColumn:[14,1,1,""],read:[14,3,1,""],reset:[14,1,1,""],setActivationThreshold:[14,1,1,""],setConnectedPermanence:[14,1,1,""],setInitialPermanence:[14,1,1,""],setMaxNewSynapseCount:[14,1,1,""],setMinThreshold:[14,1,1,""],setPermanenceDecrement:[14,1,1,""],setPermanenceIncrement:[14,1,1,""],setPredictedSegmentDecrement:[14,1,1,""],write:[14,1,1,""]},nupic:{regions:[7,5,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","staticmethod","Python static method"],"3":["py","classmethod","Python class method"],"4":["py","attribute","Python attribute"],"5":["py","module","Python module"],"6":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:staticmethod","3":"py:classmethod","4":"py:attribute","5":"py:module","6":"py:function"},terms:{"10x5":13,"32x64x16":13,"abstract":7,"boolean":[2,7,8,13],"case":[1,2,4,7,8,11],"class":[1,2,4,6,7,8,10,11,13,14],"default":[2,7,12,13,14],"final":[2,7,10],"float":[1,2,14],"function":[1,2,7,10,11,13,15],"import":[2,7,8,12],"int":[1,2,7,11,14],"new":[2,4,10,11,13,14],"public":[2,7,13],"return":[1,2,4,7,8,10,11,12,13,14,15],"static":[6,7,8,11,14],"switch":2,"throw":7,"true":[1,2,4,7,10,11,13,14],"while":4,EOS:4,For:[1,2,7,8,10,11,13],Not:7,ORed:2,Such:13,That:[2,10],The:[1,2,6,7,8,10,11,12,13,14,15],There:[1,2,7],These:[2,8,11],Use:[1,7],Used:[1,12],Useful:[7,13],Uses:7,Using:[13,14],__init__:7,__name__:6,_all:2,_claclassificationrecord:7,_comput:7,_minoverlapdutycycl:13,_reset:8,_sdrclassifi:7,_sequenceid:8,_stimulusthreshold:13,aae:10,abc:7,abl:[11,14],about:[7,8,10,11],abov:[2,10,11,13],abs:2,absolut:11,abstractmethod:7,accept:[1,7,11,13],acceptanceprob:7,access:[7,10],accessmod:7,accord:[2,11],accumul:10,accumulatederror:10,accuraci:[2,10],across:[1,7],activ:[1,7,13,14],activatecel:14,activatedendrit:14,activatepredictedcolumn:14,activationpattern:[1,7],activationthreshold:[14,15],activearrai:13,activecelloverlapavg:11,activecolumn:[13,14],activecolumncount:7,activedutycycl:13,activeinput:7,actual:[1,2,7,10],actualvalu:[1,7],actvalu:[1,2,7],actvaluealpha:1,adapt:1,add:[6,7,8,10],added:[8,14],adding:15,addinst:10,addit:[7,10],addlabel:7,addmultipleencod:2,addregion:[6,8],addregionfrombundl:6,adjust:[1,7],advanc:[1,7,10],affect:2,after:[4,7,8],again:4,against:10,age:7,aggreg:10,aggregatemetr:[3,9],ago:10,alex:1,algorithm:[1,3,7,14],align:7,all:[1,2,4,6,7,8,10,11,13,14],allfield:8,alloc:2,allow:[7,13,15],alpha:[1,7],alreadi:[4,7,10],also:[1,2,7,8,10,11,13],altern:13,alwai:[2,7,8,14],amount:[2,8,13],analog:8,anchor:4,ani:[2,7,8,10,11,13,14],anomal:7,anomali:[7,12],anomalylikelihoodregion:[3,5],anomalymod:7,anomalyparam:11,anomalyregion:[3,5],anomalythreshold:7,anoth:[2,8,10],anymor:7,apart:2,api:7,appear:2,append:4,appendrecord:4,appli:[2,7,8,10,13],applic:[1,4],applyfilt:8,approach:[1,7],appropri:7,arbitrarili:2,architectur:1,area:[10,13],aren:[1,14],arg:[6,7,11,12,14],argument:[1,7,11],around:2,arrai:[1,2,4,7,8,10,12,13],art:2,artifici:8,ascii:2,ask:10,aspect:2,assign:[2,7],assoc:10,associ:[1,2,4],assum:10,attendeecount:2,attribut:[2,7,8],auc:10,augment:14,automat:[4,7,8,11],autorewind:4,auxilari:10,avail:[2,4,7],averag:[1,10,13],avoid:2,awai:7,awri:7,axi:10,babi:7,back:4,backward:[1,2,7],base:[1,2,4,7,8,10,11,12],baselin:[2,10],basic:10,becaus:[1,2,7,10],becom:2,been:[2,10,13],befor:[2,7,11,13],begin:[4,7,8,13],behavior:2,being:[2,7,10,11,13],belong:14,below:[1,2,7,13],benchmark:11,best:2,bestprototypeindexcount:7,better:7,between:[1,2,7,11,13],bigger:1,bin:2,binari:[1,2,7,10],bind:[7,8],bit:[1,2,7,13],bitoffset:2,blank:2,block:[2,7,10],bookmark:4,bool:[1,2,11,14],boost:13,boostfactor:13,booststrength:[13,15],both:7,bottom:11,bound:[2,7],bridl:1,brought:7,bucket:[1,2,7],bucketidx:[1,7],buffer:10,build:11,built:7,bundlepath:6,burst:14,burstcolumn:14,bypass:7,cach:[7,10],caches:7,calcul:[1,2,7,10,12,13,14],call:[1,2,4,7,11,13,14],callback:4,caller:7,can:[1,2,6,7,8,10,11,12,13],candid:2,cannot:13,canon:15,capnproto:[7,8,11],care:[2,8,15],categor:[7,8],categori:[2,7,8,10],caus:13,caution:4,cell:[1,7,13,14],cellsforcolumn:14,cellspercol:7,cellspercolumn:[7,14,15],cellssavepath:7,cellstoadd:14,center:2,chang:[2,7,13],characterist:10,charg:13,chatti:15,check:[2,7],checkpointdir:11,child:2,choos:[7,13,14],circular:10,circularbuff:10,cla:[0,3,7,10,11],claclassifi:[1,7],claclassifierregion:[3,5],claclassifierregionproto:7,clamodel:[3,7,9],classif:[1,7,10],classifi:[0,2,3,7,10,11],classificationmaxdist:7,classificationvectortyp:7,classificaton:10,classifierarg:7,classifyst:7,classmethod:[2,7,8,10,11,14],cleanup:14,clear:[2,14],clearstat:4,clenabl:11,clip:2,clipinput:2,close:[2,8],closenessscor:2,clparam:11,cluster_param:12,code:1,coincid:2,collect:[4,7,8],column:[7,13,14],columnactiveseg:14,columncount:[7,15],columndimens:[13,14],columnforcel:14,columnindex:13,columnmatchingseg:14,command:[7,11],common:[3,9],common_model:12,common_network:15,commun:11,compar:[2,10],comparison:[2,10],compat:[1,2,7],complet:[4,11],compon:[2,7],compris:13,comput:[1,2,7,8,10,13,14],computepredictedactivecellindic:7,concaten:[2,7],concept:7,conceptu:7,config:12,confus:[1,2,7],conjuct:2,connect:[1,7,13,14,15],connectedcount:13,connectedperman:14,connectedsynaps:13,connectionsfactori:14,consid:[2,13],consist:[2,10],constant:10,constraint:7,construct:[7,9],constructclassificationrecord:7,constructor:[1,2,4,13,14],consumpt:2,contain:[1,2,7,8,10,11,12,14],content:[0,9,11],contigu:2,continu:[2,8],contrast:13,contribut:13,control:[1,4,12,13],conveni:[2,10],convent:7,convert:[2,7,11],copi:2,correct:10,correctli:14,correspond:[2,4,7,8,10,12],could:[1,2,4,8],count:[2,4,7,14],countri:[2,8],coverag:13,cpp:[7,12,15],creat:[2,7,8,11,12,14,15],createtemporalanomali:15,creation:11,csv:[4,8],current:[4,7,8,10,11,14],curv:10,custom:10,customcomput:[1,7],customdai:2,customerrormetr:[3,9],cycl:13,dai:2,data:[1,3,4,7,8,10,11,12,14,15],databas:[8,11],dataout:[7,8],dataset:[1,4],datasourc:8,datatyp:7,date:[2,8],dateencod:3,datetim:[2,11],dayofweek:[2,11],debug:[7,13],decod:2,decodedtostr:2,decoderesult:2,decor:7,decreas:[2,13],decrement:[13,14],dedic:4,deerial:11,defin:[2,7,8,10,13],delet:11,delin:11,delta:8,dendrit:14,densiti:13,depend:[7,11],deprec:7,depth:13,deriv:12,desc:2,describ:[1,2,7,11],descript:[2,6,7,11,12],descriptionifac:12,deseri:[7,14],deserializeextradata:7,design:[2,7,10],desir:13,detail:[2,10],detect:7,determin:[2,7,10,11,13,14],dev0:[0,1,2,4,5,6,7,8,9,10,11,12,13,14,15],develop:7,dict:[1,2,7,8,10,11,12,14,15],dictionari:[2,4,7,8,10,11],differ:[1,2,7,11,14],dimens:[6,13,14],dimension:13,directli:8,directori:[11,12],disabl:[7,13],disableinfer:11,disablelearn:11,disableprofil:6,disabletap:7,discret:10,displai:2,dissimilar:2,distal:14,distanc:7,distancemethod:7,distancenorm:7,distribut:[1,3,7,8,10],distthreshold:7,dobinar:7,doc:[6,7],docstr:7,document:[2,7],doe:[2,4,7,8,10,11],doesn:[7,14],doinfer:7,doing:[1,2,7],don:[1,14],done:13,dospher:7,down:2,due:[7,11,13],dummi:2,dure:[1,2,7,10,13,14],duti:13,dutycycleperiod:13,dynam:2,dynamicstructbuild:14,each:[1,2,4,7,8,10,13,14],editor:1,effect:[2,13],effici:[2,13],either:[2,4,8,12,13],element:[2,7,10],els:[2,13],empti:4,enabl:[2,7,11,13,14],enableinfer:[11,12],enablelearn:[11,12],enableprofil:6,enabletap:7,encod:[1,3,7,8,10,12,15],encodedbitdescript:2,encodeintoarrai:2,encoderdescript:2,encoderparam:11,encoderresult:2,encourag:13,end:[4,7,13],enforc:7,engin:[1,6,7,15],enitir:7,enough:[4,13],ensembl:[1,7],ensur:[8,14],entail:13,entri:[1,2,7,8,10],enumer:10,eof:4,epoch:2,eqaul:7,equal:[2,13],equival:2,error:[2,4,7,10],errormetr:10,especi:2,essenti:[2,8],estimationsampl:7,etc:[2,8,11],euclidean:7,evalu:2,even:[7,13],eventu:11,ever:13,everi:[1,2,7,13],everywher:13,exact:13,exactli:[2,7,10],examin:13,exampl:[1,2,4,6,7,8,10,12,13],except:[2,7,11],exclud:4,exclus:2,execut:7,executemethod:7,exist:[2,8,11],expdescriptionapi:12,expect:[2,4,8,10],experi:[11,12],experimentdir:12,explicitli:[7,8],expos:7,expvalu:[2,10],extend:[2,15],extent:13,extern:7,extract:10,f1_max:4,f1_min:4,f2_max:4,f2_min:4,facil:10,fact:[8,13],factor:13,factori:11,fall:[2,13],fals:[1,2,4,7,8,10,11,13],far:4,faster:[1,2],fdrcnode:8,feed:13,feedforward:1,few:7,field:[2,4,8,10,11,12,13],fielddatatyp:2,fieldencod:2,fieldinfo:10,fieldmeta:[2,4,11],fieldmetainfo:[4,11],fieldmetatyp:3,fieldnam:[2,10,11],fieldord:2,fieldsdict:2,fieldstat:11,fieldstatist:2,figur:2,file:[4,7,8,11,12,13],file_record_stream:[4,8],filenam:7,filepath:7,filerecordstream:[3,8],filesourc:11,fill:7,filter:8,find:14,fine:2,finish:11,finishlearn:[7,11],finit:10,fire:13,first:[1,2,4,7,11],firstrecord:4,fix:[1,7,8,10],floor:13,fn_max:4,fn_min:4,fogleman:1,follow:[2,7,10],forc:[2,11],form:2,format:[1,2,7,10,11,13],formatbit:2,fpr:10,fraction:2,fractionofmax:7,framework:[3,10,11,12],freez:[2,13],from:[1,2,4,6,7,8,10,11,12,13,14,15],full:[7,11],fulli:[7,13],further:[10,15],fx_max:4,fx_min:4,gener:[2,8,10,11,13,15],get:[1,2,6,7,8,10,11,13,14],getactivationthreshold:14,getactivecel:14,getactivedutycycl:13,getactiveseg:14,getalgorithminst:7,getalldist:7,getbasespec:7,getbookmark:4,getboostedoverlap:13,getboostfactor:13,getbooststrength:13,getbucketindic:2,getbucketinfo:2,getbucketvalu:2,getcallback:6,getcategorylist:7,getcellindex:14,getcellindic:14,getcellspercolumn:14,getcolumndimens:[13,14],getconnectedcount:13,getconnectedperman:14,getconnectedsynaps:13,getdatarowcount:4,getdecoderoutputfieldtyp:2,getdescript:2,getdisplaywidth:2,getdutycycleperiod:13,getencodedvalu:2,getencoderlist:2,geterror:4,getexperimentdescriptioninterfacefrommodul:12,getfield:4,getfielddescript:2,getfieldinfo:11,getfieldnam:4,getglobalinhibit:13,getinferencearg:11,getinferencetyp:11,getinferencetypefromlabel:10,getinhibitionradiu:13,getinitialperman:14,getinputdimens:13,getiterationcount:8,getiterationlearnnum:13,getiterationnum:13,getlabel:[7,10],getlabelresult:7,getlastrecord:4,getlatestdist:7,getlocalareadens:13,getmatchingseg:14,getmaxenabledphas:6,getmaxnewsynapsecount:14,getmaxphas:6,getmaxsegmentspercel:14,getmaxsynapsesperseg:14,getmetr:10,getmetricdetail:10,getmetriclabel:10,getminenabledphas:6,getminoverlapdutycycl:13,getminpctoverlapdutycycl:13,getminphas:6,getminthreshold:14,getnext:[4,8,11],getnextrecord:[4,8,11],getnextrecorddict:11,getnextrecordidx:4,getnumactivecolumnsperinharea:13,getnumcolumn:13,getnuminput:13,getoutputelementcount:[7,8],getoutputvalu:[7,8],getoverlap:13,getoverlapdutycycl:13,getparamet:7,getparameterarrai:7,getparameterarraycount:7,getperman:13,getpermanencedecr:14,getpermanenceincr:14,getpotenti:13,getpotentialpct:13,getpotentialradiu:13,getpredictedsegmentdecr:14,getpredictivecel:14,getprototyp:[7,8,11],getrecordsrang:4,getregion:6,getregionsbytyp:6,getruntimestat:11,getscalar:2,getscalarmetricwithtimeofdayanomalyparam:12,getscalarnam:2,getself:8,getspec:7,getspverbos:13,getstat:4,getstimulusthreshold:13,getsynpermactiveinc:13,getsynpermbelowstimulusinc:13,getsynpermconnect:13,getsynperminactivedec:13,getsynpermtrimthreshold:13,getupdateperiod:13,getwidth:2,getwinnercel:14,give:[2,13],given:[1,2,6,7,8,10,11,12,13],global:13,globaldecai:15,globalinhibit:[13,15],goe:7,going:[1,7],good:[7,10],gram:[10,11],grave:1,greater:[2,13],ground:10,groundtruth:10,groundtruthencod:10,grow:[13,14],grown:13,guarante:2,guardedcomput:7,guess:2,gut:7,had:[4,10],half:2,hand:7,handl:[7,8,10,13],handleloginput:7,handlelogoutput:7,happen:[1,7],hardcod:7,has:[1,2,7,10,11,13,14,15],have:[2,7,8,10,13,14],header:[2,4],height:13,helper:[3,9,10],henc:13,herault:1,here:[1,7,8],high:2,higher:13,hijack:13,histori:[1,7,10],historicwindows:7,historybuff:10,hold:8,holidai:2,hour:2,how:[10,13,15],howev:13,htm:[7,8],html:7,http:7,hyper:13,hypersearch:10,ident:2,iff:4,ifi:4,immut:11,impact:1,implement:[2,4,7,8,10,11,12,13,14],inact:[13,14],inarrai:2,includ:[2,7,8,10,11],includeclassifieronlyfield:11,includem:4,inclus:[2,7],incorrectli:14,increas:[1,2,13],increment:[13,14],index:[1,2,3,4,7,8,14],indic:[1,2,7,8,10,11,13,14],individu:[2,7],infer:[1,7,10,11,13],inferencearg:[11,12],inferenceel:10,inferencetyp:[10,11],infersinglestep:1,info:10,inform:[1,2,7,8,10,11,14],inhibit:13,inhibitionradiu:13,initi:[6,7,8,11,13,14,15],initialperm:15,initialperman:14,input:[1,2,3,7,8,10,11,12,13,15],inputbookmark:4,inputdata:2,inputdimens:13,inputrecord:11,inputref:4,inputthresh:7,inputvector:13,inputwidth:[7,15],insert:[2,8],insid:7,inspector:7,instabl:13,instanc:[2,6,7,10,11,12,14],instanti:7,instead:[1,2,7],insur:[1,13],integ:[2,10,15],intent:2,interfac:[3,7,9,13],intern:[6,7,13],interpret:1,invalid:13,invers:10,invok:4,iscomplet:4,isdefaultinput:7,isdefaultoutput:7,isinferenceen:11,islearningen:11,isprocess:7,isvalid:2,item:[2,7,10],iter:[4,7,10,11,13,14],iterationlearnnum:13,iterationnum:13,its:[2,7,10,11,13,14],itself:[8,11,12],join:2,just:[2,7,8],justuseauxiliari:7,keep:[7,8,13],kei:[1,2,7,10,11],kept:[7,10],knnanomalyclassifierregion:[3,5],knnclassifi:7,knnclassifierregion:[3,5],know:[1,7,8,11],kwar:7,kwarg:[6,7,8,14],label:[1,2,6,7,10],labelfilt:7,labelnam:7,larg:[7,13],larger:1,last:[4,7,10],layer:14,lead:[2,13],leaf:2,learn:[1,2,7,11,13,14],learningen:2,learningperiod:7,least:[2,13],left:4,leftpad:2,legitim:2,length:[2,7,10,13],less:[2,13],level:[1,2,7,10,11,12,13],librari:7,lifetim:2,like:[1,2,7,8,10,13],likelihood:[1,7],line:[4,13],linear:2,linearli:2,link:[6,7,15],list:[1,2,4,6,7,8,10,11,13,14],load:[7,11,12],loadexperi:12,loadexperimentdescriptionscriptfromdir:12,loadfromcheckpoint:11,local:13,localareadens:13,locat:[2,8],lock:2,log:11,logarithm:2,logic:13,loglevel:11,longer:[1,13],look:[1,7,13],loop:1,lot:[2,4],low:[2,7],lower:[1,2,7,10],machineri:11,made:[4,10],mai:[2,7,8,10,11,13,14],main:7,maintain:[1,2,7],major:13,make:[2,4,13,14],manag:10,mani:[1,2,7,13],map:[1,2,7,11,13,14],mapbucketindextononzerobit:2,mapcellstocolumn:14,mark:[4,13,14],match:[2,7,8,13,14],matrix:[1,7],max:[2,4,7,11,13,14],maxag:15,maxcategorycount:7,maxenabledphas:6,maxim:[1,7],maximum:[7,10,12,13,14],maxnewsynapsecount:14,maxoverlap:2,maxphas:6,maxpredictionsperstep:11,maxsegmentspercel:[14,15],maxstoredpattern:7,maxsynapsesperseg:[14,15],maxval:[2,12],mean:[2,7,10,13],meaningless:13,measur:[2,10],mechan:[7,8],member:[2,10],memori:[0,1,3,4,12],merg:2,meta:11,metadata:11,method:[1,2,4,7,8,10,11,12,13,14],methodnam:7,metric:[2,3,9,12],metricaccuraci:[3,9],metricaveerror:[3,9],metricdata:12,metricifac:10,metriclabel:10,metricmovingmod:[3,9],metricmultistep:[3,9],metricnegativeloglikelihood:10,metricnegauc:[3,9],metricpassthrupredict:[3,9],metricsifac:10,metricsmanag:[3,9],metricspec:[3,9],metrictrivi:[3,9],metrictwogram:[3,9],midnight:2,midnt:2,might:[2,8,13],min:[2,4,11,14],minenabledphas:6,minim:[10,13],minimum:[2,12,13],minlikelihoodthreshold:11,minoverlapdutycycl:13,minpctdutycyclebeforeinh:13,minpctoverlapdutycycl:13,minphas:6,minresolut:12,minspars:7,minthreshold:[14,15],minval:[2,12],miss:1,missingvalu:4,mix:[7,8],mode:[1,8,10,11],model:[1,2,3,7,9,10,13],modelconfig:[11,12],modelfactori:[3,9,12],modelresult:[10,11],modifi:[8,13],modul:[3,6,10,12],mondai:2,more:[1,2,4,7,8,10,13],most:[1,2,7,8,10,13],mostli:7,mostlik:10,move:10,much:13,multi:[1,2,7,10],multiencod:[3,8],multipl:[2,4,7,10],must:[2,7,8,13],mutual:2,mydata:8,myencod:8,mysourc:8,name:[2,4,6,7,8,10,11],namedtupl:[2,11],natur:2,nearbi:2,nearest:7,nearestneighbor:7,necessari:[11,14],necessarili:2,need:[2,7,8,11,15],neg:2,neighbor:[2,7,13],neighborhood:13,net:[8,13],network:[1,3,7,8,9,10,11],neural:1,neurocomput:1,never:[4,13],newseri:11,newsynapsecount:15,next:[4,8,10,11,14],node:[7,8],nodeparam:6,nodespec:7,nodetyp:6,nois:13,non:[2,8],none:[1,2,4,7,10,11,12,14],noninclus:7,nonlinear:[1,2,7],nontempor:10,noon:2,norm:7,normal:[1,7,8,11,15],note:[2,7,8,10,11,12,15],noth:4,notimplementederror:7,now:[2,10,11],numactivecolumnsperinharea:[13,15],number:[1,2,7,10,11,13,14],numberofcel:14,numberofcolumn:14,numcategori:8,numer:2,numpi:[1,2,7,8,10,12,13],numrecord:4,nupic:[1,2,4,6,7,8,10,11,12,13,14,15],object:[2,4,7,8,10,11,14],observ:10,obtain:[2,8],odd:2,off:[11,13],offset:2,offsetwithinfield:2,often:[7,13],old:7,older:1,omit:2,onc:[1,7,11],one:[1,2,7,8,10,11,13,14],ones:[7,8],onli:[2,7,10,11,13],onlin:3,oper:10,opf:[2,10,11,12],opfhelp:12,opfutil:[10,11],opt:7,optim:[7,10,11],option:[2,7],orcolumnoutput:7,order:[2,13],ordereddict:2,org:7,origin:8,oscil:13,other:[2,7,8,10,11,13],otherspec:7,otherwis:[2,7,11,13,14],our:[1,2,13],out:[1,4],outarrai:2,outcom:10,outdat:1,outer:1,output:[1,2,3,7,8,10,11,13,15],outputnam:[7,8],outputprobabilitiesbydist:7,outputtyp:15,outsid:[1,2],over:[1,7,10],overal:2,overlap:[2,13],overlapdutycycl:13,overrid:[2,7,11,14],overridden:[2,11],own:[2,7,13],page:3,pair:[2,10],pamlength:15,par:13,param:[2,4,7,8,10,11,12,14],parama:10,paramb:10,paramet:[1,2,6,7,8,10,12,13,15],parameternam:[7,8],parametervalu:[7,8],paramnam:10,parent:2,parentfieldnam:2,pars:4,part:2,partial:10,particular:7,pass:[2,4,7,10,11,12,14,15],passthrupredict:10,path:[11,12],pattern:[1,7,13],patternnz:[1,7],per:[2,7,13,14],percent:13,percentag:2,perfect:2,perfectli:7,perform:[1,7,10,11,13,14],period:[2,13],perman:[11,13,14],permanencedec:15,permanencedecr:14,permanenceinc:15,permanenceincr:14,phase:[6,7,13],phd:1,pickl:7,piecewis:2,place:[2,7,11],place_hold:6,plu:2,pluggableencodersensor:[3,5],point:[2,7],pointer:6,pool:13,pooler:[0,2,3,7],poorli:11,popul:[8,11,13],populatecategoriesout:8,posit:[4,10],possibl:[2,10],potenti:[7,10,13],potentialpct:[13,15],potentialradiu:13,pound:[2,10],pprint:2,pprinthead:2,pre:[2,8,11],pred:10,predicitonkind:10,predict:[1,2,3,7,10,12,14],predictedfield:11,predictedsegmentdecr:14,predictionencod:10,predictionkind:10,predictionmetricsmanag:10,prefix:2,present:[2,8],preserv:2,pretti:2,prevactivecel:14,prevent:[2,7,13],previou:[1,10],previous:[2,7,11,13],prevwinnercel:14,primari:13,print:[1,2],printparamet:13,probabilist:[1,7],probabl:[1,7,10],problem:2,process:[1,2,7,8],produc:[2,7,10,11],profil:7,programmat:8,progress:4,progresscb:4,propag:[7,11],proper:[7,11],properli:10,properti:[2,6,12],proto:[7,8,11,14],protocol:4,prototyp:7,provid:[2,7,8],prune:11,pseudo:13,pseudocod:14,punish:14,punishpredictedcolumn:14,purpos:13,put:[2,4],pycapnp:[7,8,11],pyregion:[3,5,6,8],pyregionproto:7,python:[2,4,7,8,12,14],qualifi:13,queri:11,radiu:[2,13],rais:[7,13],random:[3,10,13],random_distributed_scalar:2,randomdistributedencod:2,randomdistributedscalarencod:2,rang:[2,4,7],rate:10,rather:[2,7,8,10],reach:[4,8],read:[4,7,8,11,14,15],reader:4,readfromcheckpoint:11,readfromproto:[7,8],readwrit:7,real32:7,real:[1,10],reason:[2,7],reasonbl:7,recalcul:7,receiv:[2,10],recent:[1,13],recenti:7,recept:13,receptivefield:13,reclassifi:7,recognit:1,recommend:[2,7],record:[1,4,7,8,10,11,14],record_stream:11,recordlabel:7,recordnum:[1,7],recordparam:15,recordsarrai:4,recordsensor:[3,5,15],recordsensorproto:8,recordsexistaft:4,recordstream:[4,11],recordstreamifac:11,recurr:1,reestimationperiod:7,refer:[1,2,4],regardless:13,region:[3,5,6,8,13,14,15],regionclass:6,regionlevel:7,regionnam:6,regionspec:7,registerregion:6,reinforc:14,rel:[1,7],relationship:[1,13],relativethreshold:7,relev:[7,10],remain:13,rememb:7,remov:[2,7,13],removelabel:7,removelink:6,removeregion:6,replac:[2,11],replacedupl:7,report:[4,10],repres:[1,2,7,8,10,12,13,15],represent:[2,8,15],reprocess:7,request:[7,8,10],requir:[2,4,7,8,11,13],requiresplittermap:7,research:[13,14],reset:[4,7,8,11,14],resetprofil:6,resetsequencest:[7,11],resolut:[2,12],respect:[2,13],respond:13,respons:[10,13],rest:7,restrict:2,result:[1,2,7,10,11,12,13],resum:11,retriev:[2,7,8],retval:[1,2,4,7,10],reus:2,reval:7,revers:1,rewind:[4,8],right:[7,10],roc:10,round:13,routin:2,row:[4,7],rowid:7,rule:2,run:[6,7,8,10,11],runtim:[7,11],safe:2,safeti:2,sai:1,said:10,same:[2,7,10,13],sampl:[1,7],saniti:7,satisfi:8,save:[4,6,7,11],savedmodeldir:11,savemodeldir:11,scalar:[1,3,4,7,8,10],scalarencod:2,scalarnam:2,scalarstostr:2,scalarvalu:2,scale:2,schema:11,scheme:[2,8],score:[2,7,10,13],script:12,sdr:[0,2,3,7,13],sdr_classifi:1,sdrclassifi:[1,7],sdrclassifierregion:[3,5],sdrclassifierregionproto:7,search:[3,13],season:2,second:[2,11],see:[2,8,10,11,14],seed:[2,7,13,14,15],seek:4,seekfromend:4,segment:14,select:13,self:[1,7,10],sensor:[1,3,5,7,15],sensorparam:11,sent:11,sentinel_value_for_missing_data:10,separ:[2,7,8],seper:2,sequenc:[1,2,4,7,11,13,14],sequenti:1,serial:[7,8,11,14],serializeextradata:7,serv:10,servic:7,set:[2,4,7,8,10,12,13,14],setactivationthreshold:14,setactivedutycycl:13,setautorewind:4,setboostfactor:13,setbooststrength:13,setcomplet:4,setconnectedperman:14,setdutycycleperiod:13,seterror:4,setfieldstat:2,setfieldstatist:11,setglobalinhibit:13,setinhibitionradiu:13,setinitialperman:14,setiterationlearnnum:13,setiterationnum:13,setlearn:2,setlocalareadens:13,setmaxnewsynapsecount:14,setminoverlapdutycycl:13,setminpctoverlapdutycycl:13,setminthreshold:14,setnumactivecolumnsperinharea:13,setoverlapdutycycl:13,setparamet:[7,8],setparameterarrai:7,setperman:13,setpermanencedecr:14,setpermanenceincr:14,setphas:6,setpotenti:13,setpotentialpct:13,setpotentialradiu:13,setpredictedsegmentdecr:14,setsensedvalu:8,setspverbos:13,setstatelock:2,setstimulusthreshold:13,setsynpermactiveinc:13,setsynpermbelowstimulusinc:13,setsynpermconnect:13,setsynperminactivedec:13,setsynpermtrimthreshold:13,settimeout:4,setupdateperiod:13,sever:2,share:11,shell:8,shift:[1,10],shorter:13,should:[1,2,4,7,8,10,11,13,14],side:13,signal:[2,11],signatur:[7,14],similar:[2,7,13],simpl:[2,10],simpli:[2,7,10],simultan:1,sinc:[2,7,11,13],singl:[1,2,7,10],singlenodeonli:7,size:[1,2,7,10,13],skelet:11,skip:[2,7,8],smaller:2,smoothli:2,softmax:[1,7],some:[2,7,10,11],someth:[7,8],sort:[1,14],souli:1,sourc:[2,4,8,11],spars:2,sparsethreshold:7,sparsifi:7,sparsiti:8,spatial:[0,2,3,7],spatial_pool:13,spatialimp:[7,15],spatialparam:15,spatialpool:[7,13],spatialspec:7,spec:[7,8,10],special:[2,4,7,8],specif:[2,7,10,11],specifi:[1,2,4,7,8,10,11,12,13,15],specparam:10,speed:7,spenabl:11,spparam:11,spregion:[3,5,6,15],spregionproto:7,springer:1,spverbos:[13,15],sql:8,squar:13,sscalar:2,standalon:8,start:[1,2,4,7,11,14],stat:[4,10,11],state:[2,7,8,11,13],statist:[1,2,10,11],step:[1,2,7,10,14],still:[7,8],stimulu:13,stimulusthreshold:13,storag:4,store:[1,7,10,11],str:[2,6],stream:4,streamid:4,strength:13,strictli:2,string:[2,4,7,8,10,11,12],stripunlearnedcolumn:13,structur:[7,11],sub:[2,7,13],subclass:[2,6,7,11,14],subsequ:11,successcod:4,suffic:13,sugar:2,suitabl:[2,8],sum:2,summat:[1,7],sundai:2,superclass:2,supervis:1,suppli:[8,11],support:[4,7,8,11],sure:14,svddimcount:7,svdsamplecount:7,synaps:[13,14],synperconnectedcel:13,synpermactiveinc:[13,15],synpermbelowstimulusinc:13,synpermconnect:[13,15],synperminactivedec:[13,15],synpermtrimthreshold:13,syntact:2,system:[1,7],tabl:4,take:[1,2,7,10,13,15],taken:2,tap:7,tappath:7,target:[1,2],task:11,taskcontrol:10,tbd:8,tell:7,tempor:[0,3,7,10,12],temporal_memori:14,temporalimp:[7,15],temporalmemori:[1,7,14],temporalnextstep:11,temporalparam:15,temporalspec:7,term:1,termin:2,than:[1,2,7,8,11,13],thei:[2,7,10,14],them:[7,13],therefor:[10,13],thesi:1,thi:[1,2,4,7,8,9,10,11,13,14,15],thing:2,think:2,those:2,though:2,thought:13,three:[1,2,8,13],threshold:[7,13,14],through:[7,10],thrown:7,thu:7,tie:8,time:[1,2,4,7,8,10,13,14],timeofdai:[2,11],timeout:4,timestamp:12,timestep:10,tm_cpp:12,tmimplement:12,todo:[2,7,11],togeth:2,toler:13,too:[7,13],tool:9,top:[1,2,10,12],topdown:2,topdowncomput:2,topolog:13,toppredict:1,total:[2,10,13],tpenabl:11,tpparam:11,tpr:10,tpregion:[3,5,15],track:[1,8],trainrecord:7,trainspnetonlyifrequest:11,transcod:11,transform:2,treat:[10,13],treatment:[7,8],trim:13,truth:10,tsv:8,tuesdai:2,tupl:[2,4,8,11,14],turn:[11,13,14],two:[2,8,11,13],two_gram_model:11,twogram:10,twogrammodel:[3,9],txt:8,type:[2,4,7,8,10,11,12],typic:2,uber:10,unconnect:14,under:10,underli:[2,4,7,10],undocu:2,unhappi:7,union:2,uniqu:[10,13],unit:[1,2,7],unlearn:13,unless:1,unlik:2,unmodifi:2,unnam:7,unpredict:14,unregist:6,unregisterregion:6,unspecifi:[7,12],unstabl:13,unsupport:11,until:[4,8],unus:[7,13],updat:[2,7,10,13],updateperiod:13,upon:11,upper:2,usag:[1,8,14],use:[1,2,6,7,8,11,12,13],useauxiliari:7,usecach:4,used:[1,2,7,10,11,12,13,14],useful:7,user:[4,7,8,10,15],uses:[7,8,11,13],usesparsememori:7,using:[2,4,7,8,11,13,14],usual:7,util:[3,9],valid:[2,12],valu:[1,2,7,8,10,11,12,13],vanilla:7,vari:[2,7],variabl:[7,8],variat:1,varieti:10,variosu:7,variou:[7,13],vast:13,vector:[1,2,7,13],verbos:[1,2,7,8,13,15],veri:[2,7,8,11],verlag:1,versa:13,via:[12,14],vice:13,virtual:[2,11],visibl:13,vision:13,vote:[1,7],wai:[2,7,13],wait:4,want:[1,2,7,10,13],warn:7,wednesdai:2,week:2,weekend:2,weight:[1,7],weightmatrix:1,well:[1,7,11],were:[2,7],what:[2,10],when:[1,2,4,7,8,10,13],where:[1,2,4,10,11,13],whether:[2,4,7,8,13,14],which:[1,2,7,8,10,11,13,14],who:13,whole:13,whose:13,wide:10,width:[2,7,8,13],win:13,window:10,winner:14,winnercel:14,winnercount:7,within:[1,2,7,8,13],without:2,won:2,work:[2,7],worst:2,would:[1,2,10,13],wrap:[2,7],wraparound:13,wrapper:2,write:[4,7,8,11,14],writetocheckpoint:11,writetoproto:[7,8],written:7,x60:13,xxxxx:2,year:2,yet:8,yield:2,you:[1,2,7,8,10,13,14],your:7,zero:2,zip:1},titles:["Algorithms","Classifiers","Encoders","NuPIC 0.5.8.dev0 API Documentation","Input / Output","Network API","Network","Regions","Sensors","Online Prediction Framework","Metrics","Models","Utilities","Spatial Pooler","Temporal Memory","Utilities"],titleterms:{aggregatemetr:10,algorithm:0,anomalylikelihoodregion:7,anomalyregion:7,api:[3,5],cla:1,claclassifierregion:7,clamodel:11,classifi:1,common:12,customerrormetr:10,data:2,dateencod:2,dev0:3,distribut:2,document:3,encod:2,fieldmetatyp:2,filerecordstream:4,framework:9,helper:[12,15],indic:3,input:4,interfac:10,knnanomalyclassifierregion:7,knnclassifierregion:7,memori:14,metric:10,metricaccuraci:10,metricaveerror:10,metricmovingmod:10,metricmultistep:10,metricnegauc:10,metricpassthrupredict:10,metricsmanag:10,metricspec:10,metrictrivi:10,metrictwogram:10,model:[11,12],modelfactori:11,multiencod:2,network:[5,6,15],nupic:3,onlin:9,output:4,pluggableencodersensor:8,pooler:13,predict:9,pyregion:7,random:2,recordsensor:8,region:7,scalar:2,sdr:1,sdrclassifierregion:7,sensor:8,spatial:13,spregion:7,tabl:3,tempor:14,tpregion:7,twogrammodel:11,util:[12,15]}})