#!/usr/bin/env perl

############################################################################           
#  Licensed to the Apache Software Foundation (ASF) under one or more                  
#  contributor license agreements.  See the NOTICE file distributed with               
#  this work for additional information regarding copyright ownership.                 
#  The ASF licenses this file to You under the Apache License, Version 2.0             
#  (the "License"); you may not use this file except in compliance with                
#  the License.  You may obtain a copy of the License at                               
#                                                                                      
#      http://www.apache.org/licenses/LICENSE-2.0                                      
#                                                                                      
#  Unless required by applicable law or agreed to in writing, software                 
#  distributed under the License is distributed on an "AS IS" BASIS,                   
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.            
#  See the License for the specific language governing permissions and                 
#  limitations under the License.                                                      
                                                                                       

my $num_columns = shift;
while(<>) {
  chomp;
  my @splits = split(/,/, $_);
  my $num_splits = scalar @splits;
  if ($num_splits != $num_columns) {
    die "Corrupt input!".$_;
  }
  print STDERR $num_splits." -> ".$splits[0]."\t".$splits[1]."\t".$splits[2]."\n";
  print $splits[0]."\t".$splits[1]."\t".$splits[2]."\n";
}

